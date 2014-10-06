'use strict';

/**
 * @ngdoc function
 * @name vikiApp.controller:BreadCtrl
 * @description
 * # BreadCtrl
 * Controller of the vikiApp
 */
angular.module('vikiApp')
  .controller('BreadCtrl', function ($scope, $rootScope, $location, bread) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.$on('$routeChangeSuccess', function() {
      bread.setPath($location.path().slice(1));
    });
    bread.setPath('index/coding/latex.md/hello');
    $scope.getPath = bread.getPath;
    $scope.isEmpty = bread.isEmpty;
  });
