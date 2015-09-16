'use strict';

/**
 * @ngdoc function
 * @name myPeopleAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myPeopleAppApp
 */
angular.module('myPeopleAppApp')
    .controller('RatingCtrl', function($scope) {
    $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;
    });
