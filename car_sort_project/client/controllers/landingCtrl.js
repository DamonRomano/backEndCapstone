angular.module('MotoBene')
    .controller('landingCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        function($scope, $http, RootFactory, $timeout) {
            $scope.title = "Welome to Moto Bene! We're a car finder for car enthusiasts!"
        }])
