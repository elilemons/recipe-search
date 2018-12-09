class SearchController {
  constructor($window,
    EdamamService) { 
    this.$window = $window;
    this.EdamamService = EdamamService;
  }

  search(searchText) {
    this.isLoading = true;
    if (typeof searchText === 'undefined' || searchText.length < 1) { return; }
   
    if (!this.hasLocalStorage(searchText)) {
      this.EdamamService.search({searchText: searchText}).then((response) => {
        this.searchResults = response.data.hits;
        this.$window.localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
      }).
      catch(error => {
        console.error('Error:', error);
      }).
      finally(() => {
        this.isLoading = false;
      });
    }
  }

  hasLocalStorage(searchText) {
    let prevSearchText = this.$window.localStorage.getItem('searchText'),
    prevSearchResults = JSON.parse(this.$window.localStorage.getItem('searchResults'));

    if (typeof prevSearchText === 'undefined' || prevSearchText === null) {
      this.$window.localStorage.setItem('searchText', searchText);
    } else {
      if (prevSearchText === searchText) {
        this.searchResults = prevSearchResults;
        return true;
      }
      this.$window.localStorage.setItem('searchText', searchText);
    }
    return false;
  }
}

SearchController.$inject = ['$window', 
  'EdamamService'];

export default SearchController;