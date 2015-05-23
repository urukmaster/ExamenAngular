/**
 * Created by JuanManuel on 17/05/2015.
 */
App.controller('FacturaController',function($scope,$http) {
    $scope.butacasAComprar = Array();
    $scope.totalAPagar = 0;
    $scope.PeliculaElgida = "";
    $scope.TandaElegida = "";

    $scope.calcularTotal = function(){
       $scope.butacasAComprar = AppServices.getButacas();
       $scope.PeliculaElgida = AppServices.getPelicula();
       $scope.TandaElegida = AppServices.getTanda();

       for(var i = 0;i < $scope.butacasAComprar.length;i++){

           $scope.totalAPagar = $scope.totalAPagar +  $scope.butacasAComprar[i].precio;

       }
        return $scope.totalAPagar;
    }

});