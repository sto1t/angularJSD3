'use strict';

angular.module('angD3App', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TreeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });