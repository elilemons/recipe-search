'use strict';

describe('recipeSearch.version module', function() {
  beforeEach(module('recipeSearch.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
