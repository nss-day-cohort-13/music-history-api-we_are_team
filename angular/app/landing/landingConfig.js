angular.module('We_Are_Team')
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        controller: "LandingCtrl",
        templateUrl: "/app/landing/landing.html"
      })
  })