app.controller('productsController', ['$scope', '$routeParams', 'productsService', '$route',
 '$location', 'config',
 function($scope, $routeParams, productsService, $route, $location, config){

    this.tableHeader = {
      productID   : config.tableHeader.productID,
      name        : config.tableHeader.name,
      description : config.tableHeader.description,
      unitPrice   : config.tableHeader.unitPrice,
      salePrice   : config.tableHeader.salePrice,
      brand       : config.tableHeader.brand,
      measurement : config.tableHeader.measurement,
      provider    : config.tableHeader.provider
    };

    this.buttonsLabels = {
      insert : config.buttonsLabels.insert,
      cancel : config.buttonsLabels.cancel,
      update : config.buttonsLabels.update,
      delete : config.buttonsLabels.delete
    };

    this.titles = {
      insert : config.titles.insert,
      delete : config.titles.delete,
      update : config.titles.update,
      search : config.titles.search,
      back   : config.titles.back
    };

    this.customTexts = {
      min              : config.customTexts.min,
      max              : config.customTexts.max,
      verifyTextData   : config.customTexts.verifyTextData,
      verifyNumberData : config.customTexts.verifyNumberData
    };

    this.regExps = {
      verifyTextData   : config.regExps.verifyTextData,
      verifyTextData2  : config.regExps.verifyTextData2,
      verifyNumberData : config.regExps.verifyNumberData
    };

    $scope.cancel = function(){
      $scope.productID   = '';
      $scope.name        = '';
      $scope.description = '';
      $scope.unitPrice   = '';
      $scope.salePrice   = '';
      $scope.brand       = '';
      $scope.measurement = '';
      $scope.provider    = '';
    };

    $scope.insert = function(){
      var action  = 'insert';
      var url     = '?productID='+$scope.productID+
      '&name='+$scope.name+
      '&description='+$scope.description+
      '&brand='+$scope.brand+
      '&measurement='+$scope.measurement+
      '&unitPrice='+$scope.unitPrice+
      '&salePrice='+$scope.salePrice+
      '&provider='+$scope.provider;

      productsService.actionWithProduct(action, url);
      $location.path('/products');
    };

    $scope.delete = function(id){
      var action  = 'delete';
      var url     = '?productID='+id;
      productsService.actionWithProduct(action, url);
      $route.reload();
    };

    $scope.update = function (product) {
        var action  = 'update';
        var url     = '?productID='+product.productID+
        '&name='+product.name+
        '&description='+product.description+
        '&brand='+product.brand+
        '&measurement='+product.measurement+
        '&unitPrice='+product.unitPrice+
        '&salePrice='+product.salePrice+
        '&provider='+product.provider;

        productsService.actionWithProduct(action, url);
        $route.reload();
    };

    productsService.listProducts()
    .then(
      function(result){
        $scope.products = result;
        $scope.displayedCollection = [].concat($scope.products);
      },
      function(err,status){
        $scope.errorMessage = err;
    });

}]);
