app.controller('homeController', ['$scope', 'config', function($scope, config){

    this.headerContent = {
      boldTitle : config.headerContent.boldTitle,
      title     : config.headerContent.title,
      products  : config.headerContent.products,
      clients   : config.headerContent.clients
    };

}]);
