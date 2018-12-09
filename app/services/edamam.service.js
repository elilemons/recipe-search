import Environment from './environment.js';

class EdamamService {
  constructor($http) {
    this.env = new Environment();
    this.$http = $http;
    this.app_id = this.env.app_id;
    this.app_key = this.env.app_key;
    this.API = this.env.API;
  }

  /**
   * Searches Edamam using API
   * @param {Object} options 
   * @param {String} options.searchText
   */
  search(options) {
    let url = `${this.API}?q=${options.searchText}&app_id=${this.app_id}&app_key=${this.app_key}`;
    console.log({url});
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