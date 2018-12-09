import SearchComponent from './search.component.js';

angular.module('search', ['ngRoute'])

.component('search', new SearchComponent())

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    template: '<search></search>',
  });
}]);