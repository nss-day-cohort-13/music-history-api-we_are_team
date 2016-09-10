angular.module("We_Are_Team")
  .controller('TrackCtrl',
  [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function($scope, $http, RootFactory, $timeout){
      $scope.title = "Tracks";
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
        root => {
          $http.get(`${root.tracks}`)
            .then(res => {
              $scope.tracks = res.data
            })
            $http.get(`${root.albums}`)
              .then(res => {
                console.log("album res: ", res.data );
                $scope.albums = res.data
              });
            $http.get(`${root.artists}`)
              .then(res => {
                console.log("artist res: ", res.data );
                $scope.artists = res.data
              });
          $timeout();
        },
        err => console.log('error', err)
        );




      $scope.addTrack = (newTrack) => {
        console.log(newTrack)
        console.log("2nd item", $scope.selectedArtist, $scope.selectedAlbum)
          $http.post(`http://localhost:8000/tracks/`, { "name": newTrack, "album": $scope.selectedAlbum,"artist": $scope.selectedArtist})
            .then(res => {
              console.log("res tracks: ", res );
              $scope.tracks.push(res.data)
              $scope.selectedArtist = ""
              $scope.selectedAlbum = ""
              $scope.newTrack = ""
              $timeout()
            });
      };

        $scope.deleteTrack = (key, trackId) => {
            // console.log(trackId)
            return $http.delete(`http://localhost:8000/tracks/${trackId}/`)
                .then((res) => {
                    $scope.tracks.splice(key, 1)
                })
        }
    }]);
