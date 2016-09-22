angular.module('MotoBene')
    .controller('createCarCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        function($scope, $http, RootFactory, $timeout) {
            $scope.title = "Help improve the community: Write a review of a car you've driven."

            RootFactory.getApiRoot()
                .then(root => {
                        $http.get(root.CreateCarModel)
                            .then(res => {
                                $scope.showCars = res.data
                            });
                        $timeout()
                    }
                )
        }]);
