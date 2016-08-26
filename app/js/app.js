var app=angular.module('app', ['ngRoute', 'smart-table', 'ui.bootstrap', 'xeditable']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    controller:'homeController',
    templateUrl:'views/components/home.html'
  })
  .when('/products',{
    controller:'productsController',
    templateUrl:'views/productsList.html'
  })
  .when('/insert',{
    controller:'productsController',
    templateUrl:'views/productsInsert.html'
  })
  .when('/pruebaTabla',{
    controller:'productsController',
    templateUrl:'views/pruebaTabla.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});
