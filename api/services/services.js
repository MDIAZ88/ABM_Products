//Required necessary libs.
var Mongoose      = require( 'mongoose' );
var Configuration = require('../configuration/configuration.json');
var Logger        = require(Configuration.routes.winLogger);

//Connection.
var connection = Mongoose.createConnection( Configuration.mongo.connection+Configuration.mongo.dataBase,
function (err, res) {
  if (err) {
    Logger.error(err);
  } else {
    Logger.info('Database connection Succesful');
  }
});

//Schema declaration.
var Schema   = Mongoose.Schema;

var List = new Schema({
    productID          : String,
    name               : String,
    description        : String,
    brand              : String,
    measurement        : String,
    unitPrice          : Number,
    salePrice          : Number,
    purchaseDate       : Date,
    provider           : String
});

var modelList = connection.model('List', List);

//Service to show the price lists.
exports.showdata = function (req, res, next){
  modelList.find({}, function(err, lists) {
    if(err){
      res.send(err);
      Logger.error('Problems on products list.');
    } else {
      res.send(lists);
    }
  });
};

//Service to insert data into the Database.
exports.insertData = function (req, res, next) {
  new modelList({
    productID          : req.param('productID'),
    name               : req.param('name'),
    description        : req.param('description'),
    brand              : req.param('brand'),
    measurement        : req.param('measurement'),
    unitPrice          : req.param('unitPrice'),
    salePrice          : req.param('salePrice'),
    purchaseDate       : req.param('purchaseDate'),
    provider           : req.param('provider')
  }).save( function ( err, lista, count ){
    if(err){
      res.send(err);
      Logger.error('Problems inserting new product.');
    }
      Logger.info('Product inserted');
      res.redirect(Configuration.routes.root);
  });
};

//Service to delete data from the database.
exports.deleteData = function(req, res, next){
  modelList.remove({productID: req.param('productID')}, function(err) {
    if (!err) {
            Logger.info('Product deleted');
            res.redirect(Configuration.routes.root);
    }
    else {
            Logger.error('Problems deleting the product.');
            res.send(err);
    }
  });
};

//Service to modify data.
exports.modifyData = function(req, res, next){
 modelList.update({ productID: req.param('productID') }, { $set:{
    name         : req.param('name'),
    description  : req.param('description'),
    brand        : req.param('brand'),
    measurement  : req.param('measurement'),
    unitPrice    : req.param('unitPrice'),
    salePrice    : req.param('salePrice'),
    provider     : req.param('provider')
  }
}, function (err, raw) {
    if (err){
      Logger.error('Problems updating the product.');
      res.status(500).send(err);
    }
    else{
      Logger.info('Product updated');
      res.status(200).redirect(Configuration.routes.root);
    }
  });

};
