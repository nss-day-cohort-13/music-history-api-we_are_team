angular.module('We_Are_Team')
  .config(($routeProvider) => {
    $routeProvider
      .when("/albums", {
        controller: "AlbumCtrl",
        templateUrl: "/app/albums/albums.html"
      })
      .when("/albums/:albumId", {
        controller: "AlbumDetailCtrl",
        templateUrl: "/app/albums/albumDetail.html"
      })
  })