"use strict";angular.module("vikiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{redirectTo:"/index"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/index/:name*",{templateUrl:"views/post.html",controller:"PostCtrl"}).when("/index",{templateUrl:"views/post.html",controller:"PostCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("vikiApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("vikiApp").controller("AboutCtrl",["$scope","$http","roadmap",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var b=function(){};a.test=b}]),angular.module("vikiApp").controller("BreadCtrl",["$scope","$rootScope","$location","bread",function(a,b,c,d){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],b.$on("$routeChangeSuccess",function(){d.setPath(c.path().slice(1))}),d.setPath("index/coding/latex.md/hello"),a.getPath=d.getPath,a.isEmpty=d.isEmpty}]),angular.module("vikiApp").factory("bread",function(){var a=42,b=[],c=[],d=[],e=function(a){for(var b=[],c=0;c<a.length;c++)b.push("#/"+a.slice(0,c+1).join("/"));return b},f=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push({name:a[d],link:b[d]});return c};return{someMethod:function(){return a},setPath:function(a){b=a.split("/"),c=e(b),d=f(b,c)},getPath:function(){return d},isEmpty:function(){return""===d[0].name}}}),angular.module("vikiApp").controller("PostCtrl",["$scope","$rootScope","$routeParams","cache","ajax","posthtml","roadmap",function(a,b,c,d,e,f,g){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"];var h=c.name||"",i=h.substr(h.lastIndexOf("/")+1);""===i&&(i="Viki!"),b.title=i;var j=function(){a.github="",a.githubAdd="",a.links=g.isFinal(h)?[]:g.get(h),g.isFinal(h)?f.get(h,function(b){a.content=b,a.github="http://github.com/lihebi/viki-md/edit/master/src/"+h,$("#post-content").append(b),$("pre code").each(function(a,b){hljs.highlightBlock(b)}),$("#toc").toc({selectors:"h2,h3"}),$(".lang-katex").each(function(){katex.render($(this).text(),$(this).get()[0])}),$(".katex").each(function(){katex.render($(this).text(),$(this).get()[0])}),$("table").addClass("table")}):a.githubAdd="https://github.com/lihebi/viki-md/new/master/src/"+h};j(),b.$on("roadmapReady",function(){console.log("ready received"),j()})}]),angular.module("vikiApp").factory("cache",function(){var a=42,b={};return{someMethod:function(){return a},add:function(a,c){b[a]=c},get:function(a){return b[a]}}}),angular.module("vikiApp").factory("ajax",["$http",function(a){var b=42,c="http://github-raw-cors-proxy.herokuapp.com/lihebi/viki-md/master";return{someMethod:function(){return b},get:function(b,d){a.get(c+"/"+b).success(function(a){d(a)}).error(function(){console.log("http error")})},get2:function(a,b){$.get(c+"/"+a,function(a){b(a)})}}}]),angular.module("vikiApp").factory("roadmap",["$rootScope","github",function(a,b){var c=42,d={};b.get("roadmap.json",function(b){d=JSON.parse(b),console.log("ready"),a.$emit("roadmapReady")});var e=function(a,b){var c=b;if(0===Object.getOwnPropertyNames(c).length)return!1;""===a[0]&&(a=[]);var d;for(d=0;d<a.length;d++)c=c[a[d]];return c===!1},f=function(a,b){var c=b;if(0===Object.getOwnPropertyNames(c).length)return!1;""===a[0]&&(a=[]);var d,e=[];for(d=0;d<a.length;d++)c=c[a[d]];if(c===!1)return!1;var f=Object.getOwnPropertyNames(c);for(d=0;d<f.length;d++)e.push({name:f[d],link:"#/index/"+a.concat(f[d]).join("/"),"final":c[f[d]]===!1});return e},g=function(a,b,c){var d,e=[],f=Object.getOwnPropertyNames(b);for(d=0;d<f.length;d++)-1!==f[d].indexOf(a)&&e.push({name:f[d],link:"#/index"+c+"/"+f[d]}),b[f[d]]!==!1&&(e=e.concat(g(a,b[f[d]],c+"/"+f[d])));return e};return{someMethod:function(){return c},isFinal:function(a){return e(a.split("/"),d)},get:function(a){return f(a.split("/"),d)},search:function(a){return""===a?[]:("*"===a&&(a=[]),g(a,d,""))}}}]),angular.module("vikiApp").factory("posthtml",["github",function(a){var b=42,c=function(a,b){return b=b.replace(/\n/g,"\\n"),console.log(b),'<span class="katex">'+b+"</span>"};return{someMethod:function(){return b},get:function(b,d){a.get("src/"+b,function(a){a=a.replace(/\$([^$]+)\$/g,c),d(marked(a))})}}}]),angular.module("vikiApp").directive("navbar",function(){return{templateUrl:"views/navbar.html",restrict:"E",replace:!0,controller:["$scope","roadmap",function(a,b){a.$watch("search",function(){a.result=b.search(a.search)})}]}}),angular.module("vikiApp").factory("github",["$http",function(a){var b=42,c="lihebi",d="viki-md";return{someMethod:function(){return b},get:function(b,e){a.get("https://api.github.com/repos/"+c+"/"+d+"/contents/"+b).success(function(a){a=window.atob(a.content),a=decodeURIComponent(escape(a)),e(a)})}}}]);