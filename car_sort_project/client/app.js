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
