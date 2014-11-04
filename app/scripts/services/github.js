'use strict';

/**
 * @ngdoc service
 * @name vikiApp.github
 * @description
 * # github
 * Factory in the vikiApp.
 */
angular.module('vikiApp')
  .factory('github', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var owner = 'lihebi';
    var repo = 'viki-md';

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      get: function(path, callback) {
        $http.get('https://api.github.com/repos/'+owner+'/'+repo+'/contents/'+path, {
          'headers': {'Accept': 'application/vnd.github.v3.raw'}
        })
        .success(function(data) {
          // data = window.atob(data.content);
          // data = decodeURIComponent(escape(data));
          callback(data);
        });
      }
    };
  });
