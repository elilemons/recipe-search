import Environment from './environment.js';

class EdamamService {
  constructor($http) {
    this.env = new Environment();
    this.$http = $http;
    this.app_id = this.env.app_id;
    this.app_key = this.env.app_key;
    this.API = this.env.API;
    this.filters = {
      BALANCED: 'balanced', 
      HIGH_PROTEIN: 'high-protein', 
      LOW_FAT: 'low-fat', 
      LOW_CARB: 'low-carb', 
      VEGAN: 'vegan', 
      VEGETARIAN: 'vegetarian', 
      SUGAR_CONSCIOUS: 'sugar-conscious', 
      PEANUT_FREE: 'peanut-free', 
      TREE_NUT_FREE: 'tree-nut-free', 
      ALCOHOL_FREE: 'alcohol-free'
    };
  }

  /**
   * Searches Edamam using API
   * @param {Object} options 
   * @param {String} options.searchText
   * @param {String} options.searchDietaryRestrictions
   * @param {String} options.searchCalories
   */
  search(options) {
    let url = `${this.API}?q=${options.searchText}&app_id=${this.app_id}&app_key=${this.app_key}`;

    if (options.searchDietaryRestrictions) {
      if (Array.isArray(options.searchDietaryRestrictions)) {
        options.searchDietaryRestrictions.forEach(item => {
          if (item.indexOf('high') > -1 || item.indexOf('low') > -1 || item.indexOf('balanced') > -1) {
            url += `&diet=${item}`;
          } else {
            url += `&health=${item}`;
          }
        })
      } else {
        url += `&health=${options.searchDietaryRestrictions}`;
      }
    }

    if (options.searchCalories) {
      url += `&calories=1-${options.searchCalories}`;
    }

    return this.$http({
      method: 'GET',
      url: url
    }).
      then((response) => {
        return response;
      }).
      catch((error) => {
        console.error('error', error);
      }).
      finally((response) => {
        console.log('success!', response);
      });
  }
}

EdamamService.$inject = ['$http'];
export default EdamamService;