'use strict';

angular
  .module('igapp.samples.dynamicform',[])
   .controller('DynamicFormController', function($scope,$log){

    $scope.dimensionvalues = [ {width:'', length:'',height :''} ];

    $scope.addDimension = function(){

      $scope.dimensionvalues.push( {width:'', length:'',height :''});
    };


  });

