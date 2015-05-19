/**
 * Created by Esteban-Develop on 17/05/2015.
 */
'use strict';

/**
 * NutacasController
 * @constructor
 */

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

var ButacasController = function($scope, $http){
  $scope.imdbData = {};
  $scope.butacasC = [{reservar: false, pagado:true, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }
    },
  {reservar: false, pagado:true, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    },
    },
  {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
  {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }}];


    $scope.butacasB = [{reservar: false, pagado:true, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }
    },
  {reservar: false, pagado:true, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    },
    },
  {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
  {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }}];

        $scope.seleccionar = function($butaca){
      if($butaca.pagado){
            alert('Ya la butaca esta ocupada');
        }else if($butaca.reservar){
            $butaca.reservar = false;
        }else{
            $butaca.reservar = true;  
        }
    }

    $scope.butacasE = [{reservar: false, pagado:true, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }
    },
  {reservar: false, pagado:true, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    },
    },
  {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
  {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }}];

    $scope.butacasD = [{reservar: false, pagado:true, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }
    },
  {reservar: false, pagado:true, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    },
    },
  {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
  {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }}];

    $scope.butacasA = [{reservar: false, pagado:true, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }
    },
  {reservar: false, pagado:true, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    },
    },
  {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
  {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }},
    {reservar: false, pagado:false, precio:1000,
    getColor: function(){
        if(this.pagado){
            return "color:red; width:25px; height:25px";
        }else if(!this.reservar){
            return "color:green; width:25px; height:25px";
        }else{
            return "color:gray; width:25px; height:25px";
        }
    }}];

    $scope.actualIndex = 0;

    $scope.init = function() {
    };    

    $scope.init();

};
