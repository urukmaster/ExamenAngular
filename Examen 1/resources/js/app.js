'use strict';

var Cinema = {};

var App = angular.module('Cinema', ['ngRoute','CinemaServices'
    ]).config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/butacas', {
            controller : 'ButacasController',
            templateUrl : 'resources/js/templates/butacas.html'
        })
        .when('/factura', {
            controller : 'FacturaController',
            templateUrl : 'resources/js/templates/factura.html'
        })
        .when('/peliculas',{
            controller:'MoviesController',
            templateUrl: 'resources/js/templates/peliculas.html'
        })
        .otherwise({
            redirectTo : '/peliculas'
        });
}]);

