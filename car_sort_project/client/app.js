'use strict'

angular.module('MotoBene', ['ngRoute', 'angular.filter'])
    .constant('apiUrl', "http://damonromano.com:8000");

angular.module('MotoBene').factory('RootFactory', [
    "$http", "apiUrl",
    ($http, apiUrl) => {
        let apiRoot = null;
        let httpGet = $http.get(apiUrl);

        return {
            getApiRoot() {
                return httpGet.then(res => res.data)
            }
        }
    }
])

.filter('capitalize', () => {
    return (thingToChange) => {
        return thingToChange.charAt(0).toUpperCase() + thingToChange.slice(1)
    }
});

.factory('RootFactory', [
  "$http",
  "$timeout",
  "apiUrl",
  "$cookies",
  "$location",

  ($http, $timeout, apiUrl, $cookies, $location) => {
    let apiRoot = null;
    let httpGet = $http.get(apiUrl);
    let userCredentials = creds;
  };

  return {
    getApiRoot() {
      return httpGet.then(res => res.data)
    };
    credentials (creds) {
      if (creds) {
        //ecodes to Base64 string
        userCredentials = window.btoa(`${creds.username}:${creds.password}`);
        $cookies.put('MotoBene', userCredentials);
      } else {
        return userCredentials;
      }
    },
    logout () {
      userCredentials = null;
      $cookies.remove('MotoBene');
      $location.path("/");
    },
    read () {
      return userCredentials = $cookies.get('MotoBene');
    },
    update (creds) {
      userCredentials = creds;
    },
    getUserName () {
      // unencodes Base64 string to JavaScript
      try {
        let userName = window.atob(userCredentials).split(':')[0];
        return userName;
      }
      catch(e) {
        $location.path("/");
        return null;
      }
    }
  }
])
angular.module('MotoBene').run(RootFactory) => {
  RootFactory.read();
});
