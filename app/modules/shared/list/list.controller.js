class ListController {
  constructor(FavoritesService) {
    this.FavoritesService = FavoritesService;
    this.showDetail = false;
  }

  onFavoriteClick(item) {
    item.bookmarked = !item.bookmarked;

    if (item.bookmarked) {
      this.FavoritesService.addFavorite(item);
    } else if (item.bookmarked === false) {
      this.FavoritesService.removeFavorite(item);
    }
  }
}

ListController.$inject = ['FavoritesService'];
export default ListController;