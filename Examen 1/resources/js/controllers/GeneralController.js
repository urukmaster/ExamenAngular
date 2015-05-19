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

var GeneralController = function($scope,$http) {

    $scope.imdbData = {};
    $scope.login = function(){
        if($scope.usuario==="admin" && $scope.contrasena ==="123"){
            //$location.href= 'cinema.html';
            alert("Si");
        }else{
            alert("no");
        }
    }
};

