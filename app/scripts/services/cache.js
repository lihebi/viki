'use strict';

/**
 * @ngdoc service
 * @name vikiApp.cache
 * @description
 * # cache
 * Factory in the vikiApp.
 */
angular.module('vikiApp')
  .factory('cache', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var cache = {};

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      add: function(link, content) {
        cache[link] = content;
      },
      get: function(link) {
        return cache[link];
      }
    };
  });
