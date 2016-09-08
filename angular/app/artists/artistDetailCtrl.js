angular.module("We_Are_Team")
  .controller('ArtistDetailCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',
    function ($scope, $http, RootFactory, $timeout, $routeParams) {
      $scope.title = "I'm the artists detail page"
      $scope.artists = null;

      let logError = (err) => console.log("error", err);

      RootFactory.getApiRoot()
        .then(
          root => $http.get(root.artists + $routeParams.artistId),
          logError
        )
        .then(
          empRes => {
            $scope.artists = artistRes.data;
          },
          logError
        )

    }
  ]);