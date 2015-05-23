'use strict';

/**
 * GeneralController
 * @constructor
 */

App.controller('GeneralController', function($scope,$http) {
    $('#error').hide();
    $scope.imdbData = {};
    $scope.login = function(){
        if($scope.usuario==="admin" && $scope.contrasena ==="123"){
            window.location= ('cinema.html');
              }else{ 
            $('#error').show();
        }
    }
<<<<<<< HEAD
};
=======
});
>>>>>>> 9b1ef17cfb2ce48f31b4de7bb6657d80f4167b28

