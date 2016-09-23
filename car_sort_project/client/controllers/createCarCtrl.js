angular.module('MotoBene')
    .controller('createCarCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        'apiUrl',
        '$location',
        function($scope, $http, RootFactory, $timeout, apiUrl, $location) {
            $scope.title = "Add a boss ride to our sweet database."

            $scope.year;
            $scope.make;
            $scope.model;
            $scope.engine_displacement;
            $scope.engine_number_of_cylinders;
            $scope.horsepower;
            $scope.torque;
            $scope.zero_to_sixty_acceleration_time;

            RootFactory.getApiRoot()
                .then(root => {
                        $http.get(`${root.CarMake}`)
                            .then(res => {
                                $scope.showMakes = res.data
                            });
                        $timeout()
                    }
                )
            $scope.saveCar = function(){
                $http.post(apiUrl + '/CarModel/', {
                    year: $scope.year,
                    make: $scope.make.id,
                    model: $scope.model,
                    engine_displacement: $scope.engine_displacement,
                    engine_number_of_cylinders: $scope.engine_number_of_cylinders,
                    horsepower: $scope.horsepower,
                    torque: $scope.torque,
                    zero_to_sixty_acceleration_time: $scope.zero_to_sixty_acceleration_time
                })
                .then(res => {
                    $location.path('/showCars')
                })

            }
        }]);
//         {
//     "year": null,
//     "model": "",
//     "engine_displacement": null,
//     "engine_number_of_cylinders": null,
//     "horsepower": null,
//     "torque": null,
//     "zero_to_sixty_acceleration_time": null
// }
