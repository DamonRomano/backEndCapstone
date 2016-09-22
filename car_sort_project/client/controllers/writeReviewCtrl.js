angular.module('MotoBene')
    .controller('writeReviewCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        function($scope, $http, RootFactory, $timeout) {
            $scope.title = "Here, users can write and submit reviews of cars they've driven."

            // $scope.saveReview = function()

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
