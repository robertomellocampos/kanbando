'use strict';

/**
 * @ngdoc function
 * @name myPeopleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myPeopleAppApp
 */
angular.module('myPeopleAppApp')
    .controller('IndexCtrl', function($scope, Facebook, mapService, workerService, $compile) {

        var map;
        var init = function() {
            map = L.map('map', {
                'zoomControl': false
            }).setView([-22.910419, -43.178812], 13);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            map.addControl(L.control.zoom({
                position: 'bottomright'
            }));
        };

        var focus = function(marker) {
            map.setView([marker.latitude, marker.longitude], 13);
        };

        init();

        var setMarkers = function(job) {

            var workers = _.where(workerService.workers(), {job: job});
            angular.forEach(workers, function(worker, index) {
                
                $scope.rate = 7;
                $scope.max = 7;  
                $scope.name = worker.name;
                $scope.job = worker.job;
                var templatePopupRating = '<div id="teste"><h5>{{name}}</h5><h6>{{job}}</h6>' +
                    '<rating ng-model="rate" max="max"></rating></div>';
                

                var compiled = $compile(templatePopupRating)($scope)[0];
                
                L.marker([worker.latitude, worker.longitude]).addTo(map)
                    .bindPopup(compiled);

                map.setView([worker.latitude, worker.longitude], 13);
            });
        };

        $scope.searchWorkers = function(){
            setMarkers($scope.searchField);    
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
