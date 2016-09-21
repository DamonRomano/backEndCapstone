angular.module('MotoBene')
    .config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/landing', {
            controller: 'landingCtrl',
            templateUrl: 'partials-views/landing.html'
        })
        .when('/showCars', {
            controller: 'showCarsCtrl',
            templateUrl: 'showCars.html'
        })
        .when('/createCar', {
            controller: 'createCarCtrl',
            templateUrl: 'createCar.html'
        })
        .when('/writeReview', {
            controller: 'writeReviewCtrl',
            templateUrl: 'writeReview.html'
        })
}])
