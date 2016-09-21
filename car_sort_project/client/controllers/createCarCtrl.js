angular.module('MotoBene')
    .controller('createCarCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        function($scope, $http, RootFactory, $timeout) {
            $scope.title = "I'm the page where you can add your own car to the database."

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
