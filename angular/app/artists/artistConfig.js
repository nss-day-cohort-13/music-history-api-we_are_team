angular.module('We_Are_Team')
  .config($routeProvider => {
    $routeProvider
      .when('/artists', {
        controller: 'ArtistCtrl',
        templateUrl: '/app/artists/artists.html'
      })
      .when('/artists/:artistId', {
        controller: 'ArtistDetailCtrl',
        templateUrl: '/app/artists/artistDetail.html'
      })
  })