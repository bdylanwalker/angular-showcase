'use strict';


angular.module('samples.dataGrid',[])
  .controller('DataGridController', function ($scope,$http,$log) {
    $log.debug('In data grid controller');

    $http.get('http://localhost:9000/samples/data-grid/shipments.json').success(function(data){
      $scope.shipments =data;
    });

    //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
    $scope.displayedShipments = [].concat( $scope.shipments);

    $scope.columns = [
      'sid',
      'pro',
      'sic',
      'weight',
      'pieces'
    ];




  });
