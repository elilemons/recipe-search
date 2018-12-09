import FavoritesController from './favorites.controller.js';

class FavoritesComponent {
  constructor() {
    this.controller = FavoritesController;
    this.templateUrl = './modules/favorites/favorites.html';
    this.controllerAs = 'ctrl';
  }
}

export default FavoritesComponent;