angular.module("We_Are_Team")
  .controller('LandingCtrl',
  [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function($scope, $http, RootFactory, $timeout){
      $scope.title = "I'm the landing page";
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
          res => {
            console.log("res: ", res);
            $scope.apiRoot = res;
            $timeout();
          },
          err => console.log('error', err)
        );
    }
  ]);