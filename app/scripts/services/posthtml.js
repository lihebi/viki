/* global markdown */
'use strict';

/**
 * @ngdoc service
 * @name vikiApp.posthtml
 * @description
 * # posthtml
 * Factory in the vikiApp.
 */
angular.module('vikiApp')
  .factory('posthtml', function (ajax) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      get: function(link, callback) {
        ajax.get('src/'+link, function(data) {
          callback(markdown.toHTML(data));
        });
      }
    };
  });
