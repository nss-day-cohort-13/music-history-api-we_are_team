angular.module('We_Are_Team')
  .config(($routeProvider) => {
    $routeProvider
      .when("/album", {
        controller: "album.ctrl",
        templateUrl: "/app/album/album.html"
      })
      .when("/album/:albumId", {
        controller: "albumDetailCtrl",
        templateUrl: "/app/album/albumDetail.html"
      })
  })