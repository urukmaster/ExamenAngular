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
          title: "Avergers",
          week:  "Lunes - Semana 8"
        },
        {
          title: "Lambda Expressions Java 8",
          week:  "Lunes - Semana 9"
        },
        {
          title: "Maven vs Gradle",
          week:  "Lunes - Semana 10"
        },
        {
          title: "JUnit (Spring)",
           week:  "Lunes - Semana 11"
        },
        {
          title: "Unit Testing (Angular)",
           week:  "Lunes - Semana 12"
        },
        {
          title: "Angular Websockets",
           week:  "Lunes - Semana 13"
        }
    ];

    $scope.actualIndex = 0;

    $scope.init = function() {
    };    

    $scope.init();

};