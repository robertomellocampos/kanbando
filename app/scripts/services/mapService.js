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
console.log(workers);
            angular.forEach(workers, function(worker, index) {
                console.log(worker);
                L.marker([worker.latitude, worker.longitude]).addTo(map)
                    .bindPopup(worker.name);

                map.setView([worker.latitude, worker.longitude], 13);
            });
        };
    });
