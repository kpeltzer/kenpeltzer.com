'use strict';

angular.module('kenpeltzer', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
