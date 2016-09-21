angular.module('MotoBene')
    .controller('showCarsCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        function($scope, $http, RootFactory, $timeout) {
            $scope.title = "I'm the page that shows you the sortable table of cars."

            RootFactory.getApiRoot()
                .then(
                    root => {
                        $http.get(root.CarModel)
                            .then(res => {
                                $scope.showCars = res.data
                            });
                        $timeout();
                    }
                )
        }
    ]);
