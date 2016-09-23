angular.module('MotoBene')
    .controller('writeReviewCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        'apiUrl',
        '$location',
        function($scope, $http, RootFactory, $timeout, apiUrl, $location) {
            $scope.title = "Got a wicked ride?  Write a gnarly review."

            $scope

            // $scope.saveReview = function()

            RootFactory.getApiRoot()
                .then(
                    root => {
                        $http.get(`${root.Review}`)
                            .then(res => {
                                $scope.showReviews = res.data
                            });
                        $timeout();
                    }
                )
            $scope.saveReview = function(){
                $http.post(apiUrl + '/Review/', {
                    year: $scope.year,
                    make
                })
            }
        }
    ]);
