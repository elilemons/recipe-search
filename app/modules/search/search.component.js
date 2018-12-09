import SearchController from './search.controller.js';

class SearchComponent {
  constructor() {
    this.controller = SearchController;
    this.templateUrl = './modules/search/search.html';
    this.controllerAs = 'ctrl';
  }
}

export default SearchComponent;