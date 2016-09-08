angular.module('We_Are_Team')
  .config($routeProvider => {
    $routeProvider
      .when('/tracks', {
        controller: 'tracks.ctrl',
        templateUrl: '/app/tracks/tracks.html'
      })
      .when('/tracks/:trackId', {
        controller: 'trackDetailCtrl',
        templateUrl: '/app/tracks/trackDetail.html'
      })
  })