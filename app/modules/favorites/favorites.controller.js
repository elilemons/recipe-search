class FavoritesController {
  constructor(FavoritesService) {
    this.FavoritesService = FavoritesService;
    this.favorites = this.FavoritesService.favorites;
  }

  setFavorite(item) {
    item.inFavorites = !item.inFavorites;
    
    if (item.inFavorites) {
      this.FavoritesService.removeFavorite(item);
    } else {
      this.FavoritesService.addFavorite(item);
    }
  }
}

FavoritesController.$inject = ['FavoritesService'];

export default FavoritesController;