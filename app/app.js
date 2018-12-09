import './modules/favorites/favorites.module.js';
import './modules/shared/shared.module.js';
import './modules/search/search.module.js';

// Declare app level module which depends on views, and core components
angular.module('recipeSearch', [
  'ngRoute',
  'search',
  'favorites',
  'shared',
  'recipeSearch.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/search'});
}]);