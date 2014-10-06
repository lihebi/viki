/* jshint unused:false */
'use strict';

/**
 * @ngdoc function
 * @name vikiApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the vikiApp
 */
angular.module('vikiApp')
  .controller('PostCtrl', function ($scope, $rootScope, $routeParams, cache, ajax, posthtml, roadmap) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var link = $routeParams.name || '';

    var fill = function() {
      $scope.links = roadmap.isFinal(link)?[]:roadmap.get(link);
      // $scope.content = roadmap.isFinal(link)?posthtml.get(link):'';
      if (roadmap.isFinal(link)) {
        posthtml.get(link, function(data) {
          $scope.content = data;
        });
      }
    };
    fill();
    $rootScope.$on('roadmapReady', function() {
      console.log('ready received');
      fill();
    });
  });
