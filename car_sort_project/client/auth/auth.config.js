'use strict'

angular.module('MotoBene')
  .config($routeProvider => {
    $routeProvider
      .when('/login', {
        controller: 'LoginController',
        templateUrl: '/app/auth/login.html'
      })
      .when('/register', {
        controller: 'LoginController',
        templateUrl: '/app/auth/register.html'
      });
  })
