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
          return $http.get(root.animals + $routeParams.albumId);
        },
          err => console.log("error", err)
        )
        .then(albumRes => {
          $scope.albums = albumRes.data;
          return $http.get($scope.album.Artists);
        },
          err => console.log("error", err)
        )
        .then((artistRes) => {
          $scope.artists = artistsRes.data;
          $timeout();
        },
          err => console.log("error", err)
        )

