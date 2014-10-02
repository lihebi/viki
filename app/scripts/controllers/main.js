'use strict';

/**
 * @ngdoc function
 * @name vikiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vikiApp
 */
angular.module('vikiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
