'use strict';

/**
 * @ngdoc service
 * @name vikiApp.roadmap
 * @description
 * # roadmap
 * Factory in the vikiApp.
 */
angular.module('vikiApp')
  .factory('roadmap', function (ajax) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var roadmap = {};
    var ready = false;
    // FIXME this maybe unready when get function is called
    ajax.get('roadmap.json', function(data) {
      roadmap = data;
      ready = true;
    });
    var chainGet = function(list, roadmap) {
      var tmp = roadmap;
      var result = [];
      for(var i=0;i<list.length;i++) {
        tmp = tmp[list[i]];
      }
      var keys = Object.getOwnPropertyNames(tmp);
      for(var i=0;i<keys.length;i++) {
        result.push({
          name: keys[i],
          link: list.concat(keys[i]).join('/'),
          final: tmp[keys[i]] === false
        });
      }
      return result;
    };

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      get: function(route) {
        return chainGet(route.split('/'), roadmap);
      }
    };
  });
