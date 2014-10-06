'use strict';

/**
 * @ngdoc service
 * @name vikiApp.roadmap
 * @description
 * # roadmap
 * Factory in the vikiApp.
 */
angular.module('vikiApp')
  .factory('roadmap', function ($rootScope, ajax) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var roadmap = {};
    // FIXME this maybe unready when get function is called
    ajax.get('roadmap.json', function(data) {
      roadmap = data;
      console.log('ready');
      $rootScope.$emit('roadmapReady');
    });
    var chainCheck = function(list, roadmap) {
      var tmp = roadmap;
      if (Object.getOwnPropertyNames(tmp).length === 0) {return false;}
      if (list[0] === '') {
        list = [];
      }
      var i;
      for (i=0;i<list.length;i++) {
        tmp = tmp[list[i]];
      }
      return tmp === false;
    };
    var chainGet = function(list, roadmap) {
      var tmp = roadmap;
      if (Object.getOwnPropertyNames(tmp).length === 0) {return false;}
      // for index page
      if (list[0] === '') {
        list = [];
      }
      var result = [];
      var i;
      for(i=0;i<list.length;i++) {
        tmp = tmp[list[i]];
      }
      if (tmp === false) {
        return false;
      }
      var keys = Object.getOwnPropertyNames(tmp);
      for(i=0;i<keys.length;i++) {
        result.push({
          name: keys[i],
          link: '#/index/'+list.concat(keys[i]).join('/'),
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
      isFinal: function(route) {
        return chainCheck(route.split('/'), roadmap);
      },
      get: function(route) {
        return chainGet(route.split('/'), roadmap);
      }
    };
  });
