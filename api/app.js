//Configuration
var Configuration  = require('./configuration/configuration.json');

//Middlewares declaration.
var express        = require('express');
var http           = require('http');
var path           = require('path');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var logger         = require('morgan');
var errorHandler   = require('errorhandler');
var cors           = require('cors');
var static         = require('serve-static');

//Required services.
var app            = express();
var services       = require(Configuration.routes.services);
var Logger         = require(Configuration.routes.winstonLogger);
//Set Port.
app.set(Configuration.server.portCall, process.env.PORT || Configuration.server.portNumber);

//Middlewares.
app.use(logger(Configuration.server.devCall));
app.use(methodOverride());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));
app.use(function(req, res, next) {
  res.header(Configuration.cors.accesOrigin , Configuration.cors.allowOrigins);
  res.header(Configuration.cors.accesHeaders, Configuration.cors.allowHeaders);
  next();
});

//Routes.
app.get(Configuration.routes.root   , services.showdata);
app.get(Configuration.routes.insert , services.insertData);
app.get(Configuration.routes.delete , services.deleteData);
app.get(Configuration.routes.update , services.modifyData);

//Set the environment - only development.
if( Configuration.server.environment == app.get(Configuration.server.envCall)){
  app.use(errorHandler());
}

//Module Exports
module.exports = app;

//Server creation.
http.createServer(app).listen(app.get(Configuration.server.portCall),function(){
  Logger.info('Server listening on port:' + app.get(Configuration.server.portCall));
});
