class FavoritesService {
  constructor() { 
    this.favorites = [];
  }

  addFavorite(item) {
    this.favorites.push(item);
  }

  removeFavorite(item) {
    let i = 0,
      len = this.favorites.length;

    for (i; i < len; i++) {
      if (this.favorites[i] === item) {
        this.favorites.splice(i, 1);
      }
    }
  }
}
FavoritesService.$inject = [];
export default FavoritesService;