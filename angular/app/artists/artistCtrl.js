angular.module("We_Are_Team")
  .controller('ArtistCtrl',
  [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function($scope, $http, RootFactory, $timeout){
      $scope.title = "I'm the artists page";
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
        root => {
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


      $scope.deleteArtist = (key, artistId) => {
        // console.log(trackId)
        return $http.delete(`http://localhost:8000/artists/${artistId}/`)
        .then((res) => {
          $scope.artists.splice(key, 1)
        })
      };


      $scope.editArtist = (key, artistId) => {
        // console.log(trackId)
        return $http.put(`http://localhost:8000/artists/${artistId}/`)
        .then((res) => {
          console.log("res edit ", res );
          // $scope.artists.splice(key, 1)
        })
      };


      $scope.addArtist = (newArtist) => {
        console.log(newArtist)
          $http.post(`http://localhost:8000/artists/`, { name: newArtist})
            .then(res => {
              console.log("res artist: ", res );
              $scope.artists.push(res.data)
              $scope.newArtist = ""
              $timeout()
            });
      };

    }]);





