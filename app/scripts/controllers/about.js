'use strict';

/**
 * @ngdoc function
 * @name vikiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vikiApp
 */
angular.module('vikiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
