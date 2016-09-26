'use strict';

angular.module('igApp.samples.header', ['ui.bootstrap'])
  .directive('header', function () {
    return {
      restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
      replace: true,
      scope: {user: '='}, // This is one of the cool things :). Will be explained in post.
      templateUrl: "samples/header/header.html",

      controller: ['$scope', '$modal','$log', function ($scope, $modal,$log) {
       $scope.shifts = ['OUTBOUND', 'INBOUND', 'FAC'];
       $scope.sic = "";
        $scope.open = function () {
          var modalInstance = $modal.open({
            animation: 'true',
            templateUrl: 'modalcontent.html',
            controller: 'ModalInstanceCtrl',
            size:'lg',
            resolve: {
              shifts: function () {
                return $scope.shifts;
              },
              sic: function () {
                return $scope.sic;
              }
            }
          });
          modalInstance.result.then(function (sicandshift) {
           $scope.selected = sicandshift[0];
            $scope.sic = sicandshift[1];

           }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });

        }
      }]


    }
  })
  .controller('HeaderController', function ($scope,$log) {
    $log.log("In Header Control"+ $scope.sic);

  }).
   controller('ModalInstanceCtrl', function ($scope, $modalInstance, $log, shifts,sic) {

    $log.log("Hello I am here" + shifts + sic);
   $scope.shifts = shifts;
   $scope.sic = sic;
    $scope.selected = {
      shift: $scope.shifts[0]
    };

      $scope.ok = function () {
        $log.log($scope.sic);
        var sicandshift = [$scope.selected.shift,$scope.sic]
        $modalInstance.close(sicandshift);
    };


  });
