var app = angular.module('app', ['ngAnimate', 'ngRoute', 'ngSanitize','underscore']);

app.config(['$routeProvider', appConfig]);

function appConfig($routeProvider) {
    $routeProvider.when('/product/:id?', { templateUrl: 'app/product.html', controller: 'productController' });
    $routeProvider.otherwise({ redirectTo: '/' });
};
