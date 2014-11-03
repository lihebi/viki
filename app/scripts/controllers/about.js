/* jshint unused: false */
/* global $,unescape */
'use strict';

/**
 * @ngdoc function
 * @name vikiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vikiApp
 */
angular.module('vikiApp')
  .controller('AboutCtrl', function ($scope, $http, roadmap) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var callback = function(data) {
      console.log(data);
    };
    var test = function() {
    };
    $scope.test = test;
  });
