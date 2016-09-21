angular.module('MotoBene')
    .controller('writeReviewCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        function($scope, $http, RootFactory, $timeout) {
            $scope.title = "I'm the page where users can write reviews of cars to the database."

            RootFactory.getApiRoot()
                .then(
                    root => {
                        $http.get(root.Review)
                            .then(res => {
                                $scope.Review = res.data
                            });
                        $timeout();
                    }
                )
        }
    ]);
