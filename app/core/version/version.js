'use strict';

angular.module('recipeSearch.version', [
  'recipeSearch.version.interpolate-filter',
  'recipeSearch.version.version-directive'
])

.value('version', '0.1');
