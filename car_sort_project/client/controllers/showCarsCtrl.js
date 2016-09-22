angular.module('MotoBene')
    .controller('showCarsCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        function($scope, $http, RootFactory, $timeout) {
            $scope.title = "I'm the page that shows you the sortable table of cars."

            $scope.hpExpr = function(car) {
                if (!$scope.hpText) return true;
                return car.horsepower >= $scope.hpText;
            }
            $scope.tqExpr = function(car) {
                if (!$scope.tqText) return true;
                return car.torque >= $scope.tqText;
            }
            $scope.accelExpr = function(car) {
                if (!$scope.accelText) return true;
                return car.zero_to_sixty_acceleration_time <= $scope.accelText;
            }

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
