angular.module("We_Are_Team")
  .controller('TrackDetailCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',
    function ($scope, $http, RootFactory, $timeout, $routeParams) {
      $scope.title = "I'm the track detail page"
      $scope.tracks = null;
      $scope.albums = null;

      /*
        1. Get root API document
        2. Get habitat information
        3. Get habitat information
       */

      let logError = (err) => console.log("error", err);

      RootFactory.getApiRoot()
        .then(
          root => $http.get(root.tracks + $routeParams.trackId),
          logError
        )
        .then(
          trackRes => {
            console.log("trackRes 1: ", trackRes);
            $scope.tracks = trackRes.data;
            return $http.get($scope.tracks.albums);
          },
          logError
        )
        .then(
          trackRes => {
            console.log("trackRes: ", trackRes);
            $scope.tracks = trackRes.data;
            $timeout();
          },
          logError
        )

    }
  ]);
