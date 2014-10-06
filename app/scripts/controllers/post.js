'use strict';

/**
 * @ngdoc function
 * @name vikiApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the vikiApp
 */
angular.module('vikiApp')
  .controller('PostCtrl', function ($scope, $routeParams, cache, ajax) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('start');
    var link = $routeParams.name || 'index/';
    link = link.slice(6); // get rid of index/
    var content = cache.get(link);
    if (!content) {
      content = ajax.get(link);
      content = '<b>Hello</b>';
      cache.add(link, content);
    } else {
      $scope.content = content;
    }
  });
