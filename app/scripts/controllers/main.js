'use strict';

/**
 * @ngdoc function
 * @name myPeopleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myPeopleAppApp
 */
angular.module('myPeopleAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
