'use strict'

angular.module('MotoBene', ['ngRoute', 'ngCookies'])
    .constant('apiUrl', "http://localhost:8000");

angular.module('MotoBene').factory('RootFactory', [
    "$http", "apiUrl",
    ($http, apiUrl) => {
        let apiRoot = null;
        let httpGet = $http.get(apiUrl);
        let userCredentials = {};

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

angular.module('MotoBene').run((AuthFactory) => {
    AuthFactory.read();
});
