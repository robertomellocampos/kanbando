'use strict';

/**
 * @ngdoc overview
 * @name myPeopleAppApp
 * @description
 * # myPeopleAppApp
 *
 * Main module of the application.
 */
angular
  .module('myPeopleAppApp', [
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch', 
    'facebook',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider, FacebookProvider) {
  //
  FacebookProvider.init('892960984123213');
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    }).state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    });
});

