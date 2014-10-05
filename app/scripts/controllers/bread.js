'use strict';

/**
 * @ngdoc function
 * @name vikiApp.controller:BreadCtrl
 * @description
 * # BreadCtrl
 * Controller of the vikiApp
 */
angular.module('vikiApp')
  .controller('BreadCtrl', function ($scope, bread) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    bread.setPath('home/coding/latex/hello/world');
    $scope.getPath = bread.getPath;
  });
