angular.module("We_Are_Team")
  .controller('TrackDetailCtrl',
      [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        '$routeParams',

        function($scope, $http, RootFactory, $timeout, $routeParams){
          $scope.title = "I'm the tracks page";
          $scope.apiRoot = null;
          $scope.artists = null;

          RootFactory.getApiRoot()
            .then(root => {
              return $http.get(root.albums + $routeParams.trackId + "/");
            },
              err => console.log("error", err)
            )
            .then(trackRes => {
              console.log("track", trackRes);
              $scope.tracks = trackRes.data;
              return $http.get($scope.tracks.album);
            },
              err => console.log("error", err)
            )
            .then((albumRes) => {
                console.log("album res", albumRes)
              $scope.album = albumRes.data;
              $timeout();
            },
              err => console.log("error", err)
            )

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

        $scope.deleteTrack = (trackId) => {
          // console.log(trackId)
          return $http.delete(`http://localhost:8000/tracks/${trackId}/`)
          .then(() => $location.path("/tracks/"))
        };


        $scope.editTrack = (track) => {
          // console.log(track)
          return $http.put(`http://localhost:8000/tracks/${track.id}/`, track)
          .then(() => $location.path("/tracks/"))
        };
    }
  ]);
