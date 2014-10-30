/* global marked */
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
          data = data.slice(1,-1).replace(/\\n/gi, '\n');
          // an ugly solution
          // for html "
          data = data.replace(/\\"/g, '"');
          // for latex \
          data = data.replace(/\\\\/g, '\\');
          callback(marked(data));
        });
      }
    };
  });
