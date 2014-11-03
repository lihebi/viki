/* jshint unused:false */
/* global $,hljs,katex */
'use strict';

/**
 * @ngdoc function
 * @name vikiApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the vikiApp
 */
angular.module('vikiApp')
  .controller('PostCtrl', function ($scope, $rootScope, $routeParams, cache, ajax, posthtml, roadmap) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // extract link from route parameters
    var link = $routeParams.name || '';
    // get title by the last item of link
    var title = link.substr(link.lastIndexOf('/')+1);
    // set Viki! as default title
    if (title === '') {
      title = 'Viki!';
    }
    // set title to rootScope
    $rootScope.title = title;

    var fill = function() {
      // github edit link
      $scope.github='';
      // github new link
      $scope.githubAdd='';
      $scope.links = roadmap.isFinal(link)?[]:roadmap.get(link);
      // $scope.content = roadmap.isFinal(link)?posthtml.get(link):'';
      if (roadmap.isFinal(link)) {
        posthtml.get(link, function(data) {
          $scope.content = data;
          $scope.github = 'http://github.com/lihebi/viki-md/edit/master/src/'+link;
          // append post content
          $('#post-content').append(data);
          // highlight load
          $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
          });
          // table of content render
          $('#toc').toc();
          // katex render
          $('.lang-katex').each(function(index) {
            katex.render($(this).text(), $(this).get()[0]);
          });
          $('.katex').each(function(index) {
            katex.render($(this).text(), $(this).get()[0]);
          });
          $('table').addClass('table');
        });
      } else {
        $scope.githubAdd = 'https://github.com/lihebi/viki-md/new/master/src/'+link;
      }
    };
    fill();
    $rootScope.$on('roadmapReady', function() {
      console.log('ready received');
      fill();
    });
  });
