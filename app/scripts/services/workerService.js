'use strict';

/**
 * @ngdoc function
 * @name myPeopleAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myPeopleAppApp
 */
angular.module('myPeopleAppApp')
    .service('workerService', function() {
        this.workers = function() {
            return [{
                name: 'Roberto',
                latitude: -22.910419,
                longitude: -43.178812,
            }, {
                name: 'Roberto',
                latitude: -22.903570,
                longitude: -43.175797,
            }, 
            {
                name: 'Dayane',
                latitude: -22.966830,
                longitude: -43.182494,
            }];
        }
    });
