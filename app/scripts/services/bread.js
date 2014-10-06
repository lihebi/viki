'use strict';

/**
 * @ngdoc service
 * @name vikiApp.bread
 * @description
 * # bread
 * Factory in the vikiApp.
 */
angular.module('vikiApp')
  .factory('bread', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var pathList = [];
    var pathLink = [];
    var results = [];

    var generateLink = function(l) {
      var tmpLink = [];
      for (var i=0;i<l.length;i++) {
        tmpLink.push('#/'+l.slice(0,i+1).join('/'));
      }
      return tmpLink;
    };

    var generateResults = function(list, link) {
      var tmp = [];
      for (var i=0;i<list.length;i++) {
        tmp.push({name:list[i], link: link[i]});
      }
      return tmp;
    };

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      setPath: function(s) {
        pathList = s.split('/');
        pathLink = generateLink(pathList);
        results = generateResults(pathList, pathLink);
      },
      getPath: function() {
        return results;
      },
      isEmpty: function() {
        return results[0].name === '';
      }
    };
  });
