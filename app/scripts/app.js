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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch', 
    'facebook'
  ])
  .config(function($stateProvider, $urlRouterProvider, FacebookProvider) {
  //
  FacebookProvider.init('892960984123213');
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    }).state('about', {
      url: "/about",
      templateUrl: "views/about.html",
      controller: 'AboutCtrl'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/contact.html",
      controller: 'MainCtrl'
    });
});

