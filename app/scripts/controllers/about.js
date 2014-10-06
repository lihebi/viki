/* jshint unused: false */
'use strict';

/**
 * @ngdoc function
 * @name vikiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vikiApp
 */
angular.module('vikiApp')
  .controller('AboutCtrl', function ($scope, ajax, roadmap) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var callback = function(data) {
      console.log(data);
    };
    var test = function() {
      // ajax.get('roadmap.json', callback);
      console.log(roadmap.get('coding'));
    };
    $scope.test = test;
  });
