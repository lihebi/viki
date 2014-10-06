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
  .controller('AboutCtrl', function ($scope, $http, ajax, roadmap) {
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
      // console.log(roadmap.get(''));
      $.ajax('http://github-raw-cors-proxy.herokuapp.com/lihebi/viki-md/master/src/errors.md', {
        dataType: 'text'
      })
      .success(function(data){
        console.log(data.normalize());
      });
    };
    $scope.test = test;
  });
