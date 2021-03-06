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
          $timeout();
        },
        err => console.log('error', err)
        // ).then(
        //   $timeout //forces scope apply to DOM - reapply everything
        );

        $scope.deleteTrack = (key, trackId) => {
            // console.log(trackId)
            return $http.delete(`http://localhost:8000/tracks/${trackId}/`)
                .then((res) => {
                    $scope.tracks.splice(key, 1)
                })
        }
    }]);
