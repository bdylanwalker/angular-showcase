'use strict';



angular.module('igApp.samples', [
  'ngRoute',
  'samples.dataGrid'
])
.config(function ($routeProvider) {
    $routeProvider
      .when('/samples/data-grid', {
        templateUrl: 'samples/data-grid/data-grid.html',
        controller: 'DataGridController',
        controllerAs: 'dataGrid'
      })
  });

