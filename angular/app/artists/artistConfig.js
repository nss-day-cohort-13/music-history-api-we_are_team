angular.module('We_Are_Team')
  .config($routeProvider => {
    $routeProvider
      .when('/artists', {
        controller: 'artists.ctrl',
        templateUrl: '/app/artists/artists.html'
      })
      .when('/artists/:artistId', {
        controller: 'artistDetailCtrl',
        templateUrl: '/app/artists/artistDetail.html'
      })
  })