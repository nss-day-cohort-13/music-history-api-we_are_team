angular.module("We_Are_Team")
  .controller('AlbumCtrl',
  [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function($scope, $http, RootFactory, $timeout){
      $scope.title = "Albums";
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
        root => {
          $http.get(`${root.albums}`)
            .then(res => {
              console.log("album res: ", res.data );
              $scope.albums = res.data
            });
            $http.get(`${root.artists}`)
              .then(res => {
                $scope.artists = res.data
              });
          $timeout();
        },
        err => console.log('error', err)
        // ).then(
        //   $timeout //forces scope apply to DOM - reapply everything
        );

    $scope.addAlbum = (newAlbum, selectedArtist) => {
      console.log(newAlbum)
      console.log("2nd item", selectedArtist)
        $http.post(`http://localhost:8000/albums/`, { 'name': newAlbum, 'artist': selectedArtist}, {"Content-Type": "application/json"})
          .then(res => {
            console.log("res album: ", res );
            $scope.albums.push(res.data)
            $scope.selectedArtist = ""
            $scope.newAlbum = ""
            $timeout()
          });
    };
    }]);
