app.service('productsService',['$http', '$q', function($http, $q){

  this.listProducts = function(){

    var defer = $q.defer();

    $http.get('http://localhost:3000/')
    .success(function(res){
      defer.resolve(res);
    })
    .error(function(err, status){
      defer.reject(err);
    });

    return defer.promise;
  };

  this.actionWithProduct = function(action,url){
    $http.get('http://localhost:3000/'+action+'/'+url);
    console.log('http://localhost:3000/'+action+'/'+url);
  };

}]);
