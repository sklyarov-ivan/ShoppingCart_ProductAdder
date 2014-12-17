(function () {
    'use strict';
    var controllerId = "productController";
    app.controller(controllerId, ['$scope', '$routeParams', 'productsService', productController]);

    function productController($scope, $routeParams, productsService) {
        $scope.productId = $routeParams.id;
        $scope.cart = [];
        $scope.product = undefined;

        $scope.addToCart = addToCartFunc;

        activate();

        function activate() {
            productsService.get($scope.productId, function (data) {
                $scope.product = data;
            });
        }

        function addToCartFunc(arrayOfProducts) {
            $scope.cart = arrayOfProducts;
        }
    }
})();