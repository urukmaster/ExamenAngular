'use strict';

/**
 * GeneralController
 * @constructor
 */

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

var MoviesController = function($scope,$http) {

    $scope.imdbData = {};
    $scope.movies = [

        {
          title: "Avengers",
          week:  "Lunes - Semana 8"
        },
        {
          title: "Mad Max",
          week:  "Lunes - Semana 9"
        },
        {
          title: "Fast $ Furious 7",
          week:  "Lunes - Semana 10"
        },
        {
          title: "Kill the messenger",
           week:  "Lunes - Semana 11"
        }
    ];

    $scope.actualIndex = 0;

    $scope.init = function() {
    };    

    $scope.init();

};