/* jshint unused: false */
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
    var base = 'http://vikiapi.lihebi.com';

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      get: function(link) {
        $http.get(base+'/'+link)
        .success(function(data, status, headers, config) {
          return data;
        })
        .error(function(data, status, headers, config) {
          console.log('http error');
        });
      }
    };
  });
