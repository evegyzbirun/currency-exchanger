export class service {
  static async getGif(conversion_rates) {
    return fetch(`https://v6.exchangerate-api.com/v6/latest/search?q=${conversion_rates}&api_key=${beb8f7b76cb87ab64732939} limit = 1`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function (error) {
        return Error(error);
      })
  }
}
