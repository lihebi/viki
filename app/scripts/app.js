'use strict';

/**
 * @ngdoc overview
 * @name vikiApp
 * @description
 * # vikiApp
 *
 * Main module of the application.
 */
angular
  .module('vikiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/index/:name*', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/index', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
