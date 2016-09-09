angular.module("We_Are_Team")
  .controller('ArtistDetailCtrl', [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$location',
    '$routeParams',
    function ($scope, $http, RootFactory, $timeout, $location, $routeParams) {
      $scope.title = "I'm the artists detail page"
      $scope.artists = null;
      $scope.albums = null;

      let logError = (err) => console.log("error", err);

      RootFactory.getApiRoot()
        .then(root => $http.get(root.artists + $routeParams.artistId + '/'),
          logError
        )
        .then( artistRes => {
          console.log("artistRes: before", artistRes.data );
          $scope.artists = artistRes.data;
          },
          logError
        )



        $scope.deleteArtist = (artistId) => {
          // console.log(trackId)
          return $http.delete(`http://localhost:8000/artists/${artistId}/`)
          .then(() => $location.path("/artists/"))
        };


        $scope.editArtist = (artist) => {
          // console.log(artist)
          return $http.put(`http://localhost:8000/artists/${artist.id}/`, artist)
          .then(() => $location.path("/artists/"))
        };





    }
  ]);