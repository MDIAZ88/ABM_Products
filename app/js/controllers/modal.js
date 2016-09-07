app.controller('ModalCtrl', ['$scope', '$uibModal', function($scope,  $uibModal) {

      $scope.showDeleteModal = function(param) {

        $scope.product = {
          productID: param.productID,
          name: param.name,
          description: param.description,
          unitPrice: param.unitPrice,
          salePrice: param.salePrice,
          brand:param.brand,
          measurement:param.measurement,
          quantity: param.quantity,
          provider: param.provider
        };

        $scope.opts = {
          backdrop: true,
          backdropClick: true,
          dialogFade: false,
          keyboard: true,
          templateUrl : 'views/components/modals/deleteModalContent.html',
          controller : 'deleteModalInstanceCtrl',
          scope: $scope,
          resolve: {}
        };

        $scope.opts.resolve.item = function() {
            return angular.copy({productID:$scope.product});
        };

          var modalInstance = $uibModal.open($scope.opts);

          modalInstance.result.then(function(){
            console.log('Modal ok button');
          },function(){
            console.log("Modal Closed");
          });
      };

}]);
