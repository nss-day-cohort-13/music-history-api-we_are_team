angular.module('We_Are_Team', ['ngRoute'])
  .factory('RootFactory', ($http, $timeout) => {
    let apiRoot = null;
    let httpGet = $http.get('http://localhost:8000');

    return {
      getApiRoot: () => {
          return httpGet.then(res => res.data)
      }
    }
  }
)
.filter('capitalize', () => {
  return (thingToChange) => {
    thingToChange.charAt(0).toUpperCase() + thingToChange.slice(1)
  }
});