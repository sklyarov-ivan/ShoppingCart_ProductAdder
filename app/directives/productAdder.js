(function () {
    'use strict';

    app.directive('productAdder', [productAdder]);

    function productAdder() {

        var directive = {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/productAdder.html',
            controller: ctrl,
            scope: {
                options: '=', //this is the list of options available for this product
                addToCart: '=' //this method will be called and the array of products to be added to the cart will be passed to it
            }
        };

        return directive;

        function ctrl($scope) {

            $scope.addProdsToCart = addProductsToCart;

            function addProductsToCart() {
                //this method will package the items to be added to the cart correctly
                // eg: {productId: 234, unitRrp: 90.95, lineTotal: 363.80, quantity: 4, options: [{optionId: 2356, pickId: 4322}, {optionId: 4567, pickId: 3324}]
            }

        }
    };
})();
