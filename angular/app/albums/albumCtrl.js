angular.module("We_Are_Team")
  .controller('AlbumCtrl',
  [
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    function($scope, $http, RootFactory, $timeout){
      $scope.title = "I'm the album page";
      $scope.apiRoot = null;

      RootFactory.getApiRoot()
        .then(
        root => {
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
    }]);