'use strict';

//http://www.tutorialspoint.com/angularjs/angularjs_custom_directives.htm

angular
  .module('igApp.samples.customDir', [])

    // Before this create the custom html tags. see the custom-directive html for it.
    //create a custom directive ,first parameter is the html element to be attached.
    .directive('shipmentsdetails',function() {

    //define the directive object
    var directive = {};
    //restrict = E, signifies that directive is Element directive
    directive.restrict = 'E';
    //template replaces the complete element with its text.
    directive.template = "pronumber: <b>{{shipmentsdetails.proNumber}}</b> , shipmentInstanceId:  <b>{{shipmentsdetails.shipmentInstanceId}}</b>";
    //scope is used to distinguish each student element based on criteria.
    directive.scope = {
      shipmentsdetails: "=detail"
    }
    directive.compile = function (element, attributes) {
      element.css("border", "1px solid #cccccc");
      //linkFunction is linked with each element with scope to get the element specific data.
      var linkFunction = function ($scope, element, attributes) {

        element.html("<div><b>PRONUMBER :</b>" + $scope.shipmentsdetails.proNumber + " <b> SHIPMENTINSTID :</b> " +
         + $scope.shipmentsdetails.shipmentInstanceId + "</div> ");

      }
      return linkFunction;
    }
    return directive;
  })


  .controller('CustomDirectiveController',function ($scope){
  $scope.shipments =
    {
      proNumber: "5396897845" ,
      shipmentInstanceId : "19999999"
    }
  });




