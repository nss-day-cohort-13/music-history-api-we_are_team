angular.module('We_Are_Team')
  .config(($routeProvider) => {
    $routeProvider
      .when("/album", {
        controller: "AlbumCtrl",
        templateUrl: "/app/album/album.html"
      })
      .when("/album/:albumId", {
        controller: "AlbumDetailCtrl",
        templateUrl: "/app/album/albumDetail.html"
      })
  })