/* jshint unused: false */
/* global $ */
'use strict';

/**
 * @ngdoc service
 * @name vikiApp.ajax
 * @description
 * # ajax
 * Factory in the vikiApp.
 */
angular.module('vikiApp')
  .factory('ajax', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var base = 'http://github-raw-cors-proxy.herokuapp.com/lihebi/viki-md/master';

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      // Use $http service, very weird and even works bad at format.
      get: function(link, callback) {
        $http.get(base+'/'+link)
        .success(function(data, status, headers, config) {
          callback(data);
        })
        .error(function(data, status, headers, config) {
          console.log('http error');
        });
      },
      // much much better!!!!
      get2: function(link, callback) {
        $.get(base+'/'+link, function(data) {
          callback(data);
        });
      }
    };
  });
