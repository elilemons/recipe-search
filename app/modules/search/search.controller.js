class SearchController {
  constructor(EdamamService) { 
    this.EdamamService = EdamamService;
  }

  search(searchText, searchDietaryRestrictions, searchCalories) {
    if (typeof searchText === 'undefined' || searchText.length < 1) { return; }

    this.EdamamService.search({
      searchText: searchText, 
      searchDietaryRestrictions: searchDietaryRestrictions,
      searchCalories: searchCalories}).
    then((response) => {
      this.searchResults = response.data.hits;
    }).
    catch(error => {
      console.error('Error:', error);
    });
  }

  clear() {
    this.searchDietaryRestrictions = undefined;
    this.searchText = undefined;
    this.searchCalories = undefined;
    this.searchResults = undefined;
  }
}

SearchController.$inject = ['EdamamService'];

export default SearchController;