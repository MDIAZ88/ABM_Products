app.controller('deleteModalInstanceCtrl',['$scope', '$uibModalInstance', 'productsService', '$route',
   function ($scope, $uibModalInstance, productsService, $route) {
    $scope.ok = function (id) {
        var action  = 'delete';
        var url     = '?productID='+id;
        productsService.actionWithProduct(action, url);
        $uibModalInstance.close();
        $route.reload();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);
