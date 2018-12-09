import FavoritesComponent from './favorites.component.js';

angular.module('favorites', ['ngRoute'])

.component('favorites', new FavoritesComponent())

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/favorites', {
    template: '<favorites></favorites>',
  });
}]);