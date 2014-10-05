'use strict';

/**
 * @ngdoc function
 * @name vikiApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the vikiApp
 */
angular.module('vikiApp')
  .controller('PostCtrl', function ($scope, $routeParams, cache) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var link = $routeParams.name;
    var content = cache.get(link);
    if (!content) {
      content = 'hello';
      cache.add(link, content);
    } else {
      $scope.content = content;
    }
  });
