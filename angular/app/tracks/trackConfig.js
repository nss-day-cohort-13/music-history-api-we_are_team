angular.module('We_Are_Team')
  .config($routeProvider => {
    $routeProvider
      .when('/tracks', {
        controller: 'TrackCtrl',
        templateUrl: '/app/tracks/tracks.html'
      })
      .when('/tracks/:trackId', {
        controller: 'TrackDetailCtrl',
        templateUrl: '/app/tracks/trackDetail.html'
      })
  })