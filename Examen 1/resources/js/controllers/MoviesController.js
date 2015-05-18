'use strict';

/**
 * Created by Mauricio Fernandez on 17/05/2015.
 */

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

var MoviesController = function($scope,$http) {
    $scope.chosenMovie = {id:"",value:""};
    $scope.chosenTime = {id:"",value:""};

    $scope.movies = [

        {
            title: "Avengers",
            description:  "Cuando se trata de Tony Stark para impulsar un programa de mantenimiento de la paz latente, las cosas van mal y depende de los Vengadores para detener al villano Ultron de promulgar sus terribles planes.",
            time1: "4:00 pm",
            time2: "7:00 pm",
            image: "resources/images/avengers.png",
        },
        {
            title: "Mad Max",
            description:  "Mad Max forma parte de un grupo que huye por del desierto. Escapan de una ciudadela tiranizada por Immortan Joe, a quien han quitado algo irreemplazable. El Señor de la Guerra moviliza a todos y se genera una Guerra de la Carretera de altas revoluciones.",
            time1: "12:00 pm",
            time2: "4:00 pm",
            image: "resources/images/madmax.png",
        },
        {
            title: "Fast & Furious 7",
            description:  "Deckard Shaw busca venganza contra Dominic Toretto y su familia por la muerte de su hermano.",
            time1: "4:30 pm",
            time2: "8:20 pm",
            image: "resources/images/fastandfurious.png",
        },
        {
            title: "Kill the messenger",
            description:  "Un periodista se convierte en el blanco de una campaña de desprestigio que lo impulsa hasta el punto del suicidio despues de que el expone el papel de la CIA en ayudar a armar a los rebeldes en Nicaragua y la importacion de cocaina en California.",
            time1: "4:00 pm",
            time2: "7:00 pm",
            image: "resources/images/kill.png",
        }
    ];

    $scope.init = function() {
    };    

    $scope.init();

    $scope.chooseMovie = function(movie, index){
        $scope.chosenMovie.value = movie.title;
        $scope.chosenTime.value = index;
    };

};