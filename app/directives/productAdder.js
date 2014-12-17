(function () {
    'use strict';

    app.directive('productAdder', [productAdder]);

    function productAdder() {

        var directive = {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/directives/productAdder.html',
            controller: ctrl,
            link: link,
            scope: {
                product: '=', //this is the list of options available for this product
                addToCart: '=' //this method will be called and the array of products to be added to the cart will be passed to it
            }
        };

        return directive;

        function ctrl($scope) {
            $scope.addProdsToCart = addProductsToCart;
            function addProductsToCart() {
                var result = {};
                result.products = [];
                _.each($scope.order,function(ci,cn){
                    _.each(ci,function(si,sn){
                        var params = {
                            productId: '',
                            unitRrp: $scope.product.rrp,
                            lineTotal: '',
                            quantity: si,
                            options: []
                        }
                        params.options.push({optionId:$scope.size.id,pickId: +sn});
                        params.options.push({optionId:$scope.colour.id,pickId: +cn});
                        result.products.push(params);
                    })
                });
                $scope.addToCart = result;
                //this method will package the items to be added to the cart correctly
                // eg: {productId: 234, unitRrp: 90.95, lineTotal: 363.80, quantity: 4, options: [{optionId: 2356, pickId: 4322}, {optionId: 4567, pickId: 3324}]
            }
        }
        function link($scope,element,attr) {
            $scope.size = _.find($scope.product.options,function(i,n){
                return i.name.toLowerCase() == 'size';
            });
            $scope.colour = _.find($scope.product.options,function(i,n){
                return i.name.toLowerCase() == 'colour';
            });
            $scope.order = [];
        }
    };
})();
