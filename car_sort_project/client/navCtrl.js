'use strict'

angular.module("MotoBene")
  .controller("NavCtrl", [
    "$scope",
    "$http",
    "RootFactory",
    "AuthFactory",
    "$timeout",
    "$routeParams",
    function ($scope, $http, RootFactory, AuthFactory, $timeout, $routeParams) {
      $scope.make = null;
      $scope.users = null;
      $scope.root = null;

      /*
        Get the root resources of the API
       */
      RootFactory.getApiRoot()
        .then(
          root => {
            $scope.root = root;
            return $http.get(root.habitats)
          }, console.error
        )
        // Store all habitats, and retrieve users
        .then(
          res => {
            $scope.habitats = res.data;
            return $http.get($scope.root.users);
          }, console.error
        )
        // Store users
        .then(res => $scope.users = res.data, console.error);

      $scope.authorized = () => AuthFactory.credentials();
      $scope.logout = AuthFactory.logout;

      $scope.purchase = () => {
        // Set the authorization headers on the request
        $http.defaults.headers.common.Authorization = 'Basic ' + RootFactory.credentials();

        $http({
          url: $scope.root.tickets,
          method: "POST",
          data: {
            "owner": $scope.selectedUser.url,
            "habitat": $scope.selectedHabitat.url
          }
        })
        .success(res => res.success ? $location.path('/tickets') : null)
        .error(console.error);
      }

    }
  ]);
