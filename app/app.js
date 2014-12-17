var app = angular.module('app', ['ngAnimate', 'ngRoute', 'ngSanitize']);

app.config(['$routeProvider', appConfig]);

function appConfig($routeProvider) {
    $routeProvider.when('/product/:id?', { templateUrl: 'app/product.html', controller: 'productController' });
    $routeProvider.otherwise({ redirectTo: '/' });
};
