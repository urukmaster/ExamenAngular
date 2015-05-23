/**
 * Created by Esteban-Develop on 17/05/2015.
 */
'use strict';

/**
 * NutacasController
 * @constructor
 */

App.controller('ButacasController',function($scope, $http){
  $scope.imdbData = {};
  $scope.Butacas =  getButacas(["A", "B", "C", "D"]);

  $scope.butacasSeleccionadas = new Array();
  $scope.compra = 0;

  function getButacas(posicionB){
    var butacas = [21];
    var numAsiento = 21;
    for (var i = 0; i < 21; i++) {
        butacas[i] = {reservado:false, pagado:false, precio:1000, posicion:posicionB[random()] + numAsiento};
        numAsiento--;
    };
    return butacas;
}

  function random(){
    return Math.floor((Math.random() * 3) + 0);
  }

     $scope.seleccionar = function($butaca){
      if($butaca.pagado){
            alert('Ya la butaca esta ocupada');
        }else if($butaca.reservado){
            $butaca.reservado = false;
            $scope.eliminarButaca($butaca);
        }else{
            $butaca.reservado = true;
            $scope.asignar($butaca);
        }
    };

    $scope.asignar = function($butaca){
      $scope.butacasSeleccionadas[$scope.compra] = $butaca;
      $scope.compra++;
    }

    $scope.eliminarButaca = function($butaca){
      for (var i = $scope.butacasSeleccionadas.length - 1; i >= 0; i--) {
        if($scope.butacasSeleccionadas[i]=== $butaca){
          $scope.butacasSeleccionadas[i] === null;
        }
      };
    }

    $scope.comprar = function(){
      var arraySeleccionada = new Array();
      for (var i = $scope.butacasSeleccionadas.length - 1; i >= 0; i--) {
        if($scope.butacasSeleccionadas[i] != null){
          arraySeleccionada[i] = $scope.butacasSeleccionadas[i];
        }
          AppServices.Butacas = arraySeleccionada;
          $http.response.send('/factura');
      };

    }
    $scope.getPelicula = function(){
        return AppServices.getPelicula() + " " + AppServices.getTanda();
    }

    $scope.init = function() {
    };    

    $scope.init();
});
