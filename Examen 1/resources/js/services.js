'use strict';

/* Services */

var AppServices = angular.module('CinemaServices', []);

AppServices.value('version', '0.2');

AppServices.Pelicula = "";

AppServices.Tanda = 0;

AppServices.Butacas = new Array();

AppServices.setPelicula= function(movie, showTime){
    AppServices.Pelicula= movie;
    AppServices.Tanda = showTime;
}

AppServices.getPelicula = function(){
    return AppServices.Pelicula;
}

AppServices.getTanda = function(){
    return AppServices.Tanda;
}

AppServices.setButacas = function(butacasSeleccionadas){
    AppServices.Butacas = butacasSeleccionadas;
}

AppServices.getButacas = function(){
    return AppServices.Butacas;
}



