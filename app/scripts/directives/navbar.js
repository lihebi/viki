'use strict';

/**
 * @ngdoc directive
 * @name vikiApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('vikiApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'views/navbar.html',
      restrict: 'E',
      replace: true,
      controller: function($scope, roadmap) {
        // $scope.out = function() {
        //   return roadmap.search($scope.search);
        // };
        $scope.$watch('search', function() {
          $scope.result = roadmap.search($scope.search);
        });
      }
    };
  });
