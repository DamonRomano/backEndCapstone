angular.module('MotoBene')
    .controller('createCarCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
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
                        $http.get(`${root.CarModel}`)
                            .then(res => {
                                $scope.showCars = res.data
                            });
                        $timeout()
                    }
                )
            $scope.saveCar = function(year, make, model, engine_displacement, engine_number_of_cylinders, horsepower, torque, zero_to_sixty_acceleration_time){
                $http.post('http://localhost:8000/CarModel/', {
                    year: year,
                    make: make,
                    model: model,
                    engine_displacement: engine_displacement, engine_number_of_cylinders: engine_number_of_cylinders,
                    horsepower: horsepower,
                    torque: torque,
                    zero_to_sixty_acceleration_time: zero_to_sixty_acceleration_time
                })
                    .then(res => {
                        console.log(res.data);
                        // $scope.showCars

                        // $location.path('/showCars')
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
