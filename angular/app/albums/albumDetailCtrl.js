angular.module("We_Are_Team")
  .controller('AlbumDetailCtrl',
  [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',

    function($scope, $http, RootFactory, $timeout, $routeParams){
      $scope.title = "I'm the albums page";
      $scope.apiRoot = null;
      $scope.artists = null;

      RootFactory.getApiRoot()
        .then(root => {
          return $http.get(root.albums + $routeParams.albumId + "/");
        },
          err => console.log("error", err)
        )
        .then(albumRes => {
          console.log("album", albumRes);
          $scope.albums = albumRes.data;
          return $http.get($scope.albums.artist);
        },
          err => console.log("error", err)
        )
        .then((artistRes) => {
            console.log("artist res", artistRes)
          $scope.artist = artistRes.data;
          $timeout();
        },
          err => console.log("error", err)
        )

        $scope.deleteAlbum = (albumId) => {
          // console.log(trackId)
          return $http.delete(`http://localhost:8000/albums/${albumId}/`)
          .then(() => $location.path("/albums/"))
        };

        $scope.editAlbum = (album) => {
          // console.log(album)
          return $http.put(`http://localhost:8000/albums/${album.id}/`, album)
          .then(() => $location.path("/albums/"))
        };
      }


  ]);
