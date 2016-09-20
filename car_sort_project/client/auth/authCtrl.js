app.controller('MainController', function($scope, $http, $location) {

  $scope.user = {
    username: "",
    password: ""
  };

  $scope.register = function() {
      $http({
        url: "/register",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password,
        }
      }).success(res => {
        if (res.success === true) {
            $location.path('/hello');
        } else {
            // Show dialog element telling user that registration failed
        }
      }).error(() => {
        // Show dialog element telling user that registration failed
      });
  };


  $scope.login = function() {
      $http({
        url: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password
        }
      }).success(res => {
        if (res.success === true) {
            $location.path('/hello');
        } else {
            // Show dialog element telling user that registration failed
        }
      }).error(() => {
        // Show dialog element telling user that registration failed
      });
  };

});
