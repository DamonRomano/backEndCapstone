angular.module('MotoBene')
    .controller('landingCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        function($scope, $http, RootFactory, $timeout) {
            $scope.title = "A car finder for car enthusiasts!"
        }])
