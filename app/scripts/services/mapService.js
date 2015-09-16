'use strict';

/**
 * @ngdoc function
 * @name myPeopleAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myPeopleAppApp
 */
angular.module('myPeopleAppApp')
    .service('mapService', function(workerService) {
        var map;
        this.init = function() {
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

        this.focus = function(marker) {
            map.setView([marker.latitude, marker.longitude], 13);
        };

        this.setMarkers = function(name) {

            var workers = _.where(workerService.workers(), {name: name});
            angular.forEach(workers, function(worker, index) {
                console.log(worker);

                var templatePopupRating = '<h4>Default</h4>' +
                    '<rating ng-model="rate" ng-init="rate = 7, max = 10" max="max" readonly="isReadonly"></rating>';
                L.marker([worker.latitude, worker.longitude]).addTo(map)
                    .bindPopup('<div id="teste" ng-controller="RatingCtrl">' + worker.name +
                    templatePopupRating +
                        '</div>');

                map.setView([worker.latitude, worker.longitude], 13);
            });
        };
    });
