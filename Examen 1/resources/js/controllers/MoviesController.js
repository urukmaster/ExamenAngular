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
            image: "resources/images/avengers.png",
            times: [{
                id: 1,
                time: "4:00 pm"
            }, {
                id: 2,
                time: "7:00 pm"
            }]
        },
        {
            title: "Mad Max",
            description:  "Mad Max forma parte de un grupo que huye por del desierto. Escapan de una ciudadela tiranizada por Immortan Joe, a quien han quitado algo irreemplazable. El Se�or de la Guerra moviliza a todos y se genera una Guerra de la Carretera de altas revoluciones.",
            image: "resources/images/madmax.png",
            times: [{
                id: 1,
                time: "4:30 pm"
            }, {
                id: 2,
                time: "8:00 pm"
            }]
        },
        {
            title: "Fast & Furious 7",
            description:  "Deckard Shaw busca venganza contra Dominic Toretto y su familia por la muerte de su hermano.",
            image: "resources/images/fastandfurious.png",
            times: [{
                id: 1,
                time: "3:00 pm"
            }, {
                id: 2,
                time: "10:00 pm"
            }]
        },
        {
            title: "Kill the messenger",
            description:  "Un periodista se convierte en el blanco de una campa�a de desprestigio que lo impulsa hasta el punto del suicidio despues de que el expone el papel de la CIA en ayudar a armar a los rebeldes en Nicaragua y la importacion de cocaina en California.",
            image: "resources/images/kill.png",
            times: [{
                id: 1,
                time: "2:00 pm"
            }, {
                id: 2,
                time: "5:30 pm"
            }, {
                id: 3,
                time: "9:50"
            }]
        }
    ];

    $scope.init = function() {
    };    

    $scope.init();

    $scope.chooseMovie = function(movie, showtime){
        $scope.chosenMovie.value = movie.title;
        $scope.chosenTime.value = showtime.id;
    };

};