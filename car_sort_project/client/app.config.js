angular.module('MotoBene')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'landingCtrl',
                templateUrl: 'partials-views/landing.html'
            })
            .when('/showCars', {
                controller: 'showCarsCtrl',
                templateUrl: 'partials-views/showCars.html'
            })
            .when('/createCar', {
                controller: 'createCarCtrl',
                templateUrl: 'partials-views/createCar.html'
            })
            .when('/writeReview', {
                controller: 'writeReviewCtrl',
                templateUrl: 'partials-views/writeReview.html'
            })
            .when('/login', {
                controller: 'authCtrl',
                templateUrl: 'partials-views/login.html'
            })
            .when('/register', {
                controller: 'authCtrl',
                templateUrl: 'partials-views/login.html'
            })
            .otherwise({redirectTo: '/'})
    }])
