"use strict";angular.module("vikiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{redirectTo:"/index"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/index/:name*",{templateUrl:"views/post.html",controller:"PostCtrl"}).when("/index",{templateUrl:"views/post.html",controller:"PostCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("vikiApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("vikiApp").controller("AboutCtrl",["$scope","$http","ajax","roadmap",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var b=function(){$.ajax("http://github-raw-cors-proxy.herokuapp.com/lihebi/viki-md/master/src/errors.md",{dataType:"text"}).success(function(a){console.log(a.normalize())})};a.test=b}]),angular.module("vikiApp").controller("BreadCtrl",["$scope","$rootScope","$location","bread",function(a,b,c,d){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.$on("$routeChangeSuccess",function(){d.setPath(c.path().slice(1))}),d.setPath("index/coding/latex.md/hello"),a.getPath=d.getPath,a.isEmpty=d.isEmpty}]),angular.module("vikiApp").factory("bread",function(){var a=42,b=[],c=[],d=[],e=function(a){for(var b=[],c=0;c<a.length;c++)b.push("#/"+a.slice(0,c+1).join("/"));return b},f=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push({name:a[d],link:b[d]});return c};return{someMethod:function(){return a},setPath:function(a){b=a.split("/"),c=e(b),d=f(b,c)},getPath:function(){return d},isEmpty:function(){return""===d[0].name}}}),angular.module("vikiApp").controller("PostCtrl",["$scope","$rootScope","$routeParams","cache","ajax","posthtml","roadmap",function(a,b,c,d,e,f,g){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var h=c.name||"",i=function(){a.github="",a.githubAdd="",a.links=g.isFinal(h)?[]:g.get(h),g.isFinal(h)?f.get(h,function(b){a.content=b,a.github="http://github.com/lihebi/viki-md/edit/master/src/"+h,$("#post-content").append(b),$("pre code").each(function(a,b){hljs.highlightBlock(b)})}):a.githubAdd="https://github.com/lihebi/viki-md/new/master/src/"+h};i(),b.$on("roadmapReady",function(){console.log("ready received"),i()})}]),angular.module("vikiApp").factory("cache",function(){var a=42,b={};return{someMethod:function(){return a},add:function(a,c){b[a]=c},get:function(a){return b[a]}}}),angular.module("vikiApp").factory("ajax",["$http",function(a){var b=42,c="http://github-raw-cors-proxy.herokuapp.com/lihebi/viki-md/master";return{someMethod:function(){return b},get:function(b,d){a.get(c+"/"+b).success(function(a){d(a)}).error(function(){console.log("http error")})},get2:function(a,b){$.get(c+"/"+a,function(a){b(a)})}}}]),angular.module("vikiApp").factory("roadmap",["$rootScope","ajax",function(a,b){var c=42,d={};b.get("roadmap.json",function(b){d=b,console.log("ready"),a.$emit("roadmapReady")});var e=function(a,b){var c=b;if(0===Object.getOwnPropertyNames(c).length)return!1;""===a[0]&&(a=[]);var d;for(d=0;d<a.length;d++)c=c[a[d]];return c===!1},f=function(a,b){var c=b;if(0===Object.getOwnPropertyNames(c).length)return!1;""===a[0]&&(a=[]);var d,e=[];for(d=0;d<a.length;d++)c=c[a[d]];if(c===!1)return!1;var f=Object.getOwnPropertyNames(c);for(d=0;d<f.length;d++)e.push({name:f[d],link:"#/index/"+a.concat(f[d]).join("/"),"final":c[f[d]]===!1});return e},g=function(a,b,c){var d,e=[],f=Object.getOwnPropertyNames(b);for(d=0;d<f.length;d++)-1!==f[d].indexOf(a)&&e.push({name:f[d],link:"#/index"+c+"/"+f[d]}),b[f[d]]!==!1&&(e=e.concat(g(a,b[f[d]],c+"/"+f[d])));return e};return{someMethod:function(){return c},isFinal:function(a){return e(a.split("/"),d)},get:function(a){return f(a.split("/"),d)},search:function(a){return""===a?[]:("*"===a&&(a=[]),g(a,d,""))}}}]),angular.module("vikiApp").factory("posthtml",["ajax",function(a){var b=42;return{someMethod:function(){return b},get:function(b,c){a.get("src/"+b,function(a){a=a.slice(1,-1).replace(/\\n/gi,"\n"),a=a.replace(/\\"/g,'"'),c(marked(a))})}}}]),angular.module("vikiApp").directive("navbar",function(){return{templateUrl:"views/navbar.html",restrict:"E",replace:!0,controller:["$scope","roadmap",function(a,b){a.$watch("search",function(){a.result=b.search(a.search)})}]}});