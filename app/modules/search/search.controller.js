class SearchController {
  constructor(EdamamService) { 
    this.EdamamService = EdamamService;
    this.searchResults = ['Hello', 'World']; 
  }

  search(searchText) {
    if (typeof searchText === 'undefined' || searchText.length < 1) { return; }
    console.log('There was a search:', searchText);
    this.EdamamService.search({searchText: searchText}).then((response) => {
      console.log(response);
    });
  }
}

SearchController.$inject = ['EdamamService'];

export default SearchController;