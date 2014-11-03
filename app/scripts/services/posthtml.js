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
  .factory('posthtml', function (github) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var replacer = function(match, p) {
      p = p.replace(/\n/g, '\\n');
      console.log(p);
      return '<span class="katex">'+p+'</span>';
    };
    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      get: function(link, callback) {
        github.get('src/'+link, function(data) {
          // data = window.atob(data.content);
          // data = decodeURIComponent(escape(data));
          data = data.replace(/\$([^$]+)\$/g, replacer);
          callback(marked(data));
        });
      }
    };
  });
