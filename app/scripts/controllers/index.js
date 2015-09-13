'use strict';

/**
 * @ngdoc function
 * @name myPeopleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myPeopleAppApp
 */
angular.module('myPeopleAppApp')
    .controller('IndexCtrl', function($scope, Facebook, mapService) {
        mapService.init();

        $scope.searchWorkers = function(){console.log($scope.searchField);
            mapService.setMarkers($scope.searchField);    
        };


        $scope.login = function() {
            // From now on you can use the Facebook service just as Facebook api says
            Facebook.login(function(response) {
                console.log(response);
                $scope.me();
                // Do something with response.
            }, {
                scope: 'public_profile'
            });
        };


        $scope.$watch(function() {
            // This is for convenience, to notify if Facebook is loaded and ready to go.
            return Facebook.isReady();
        }, function() {
            window.Face = Facebook;
            $scope.facebookReady = true;
        });

        $scope.getLoginStatus = function() {
            Facebook.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    $scope.loggedIn = true;
                } else {
                    $scope.loggedIn = false;
                }
            });
        };

        $scope.me = function() {
            Facebook.api('/me', function(response) {

                $scope.user = response;
            });
        };

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
