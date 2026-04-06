import UIRenderer from "./UIRenderer";

export default class APIManager {
  static api = {
    baseUrl: "https://openlibrary.org/search.json?q=",
    defaultRequest: "test",
    fetchOptions: {
      method: "GET",
    },
  };

  static async fetchBooksData(request) {
    UIRenderer.displayBooksMessage(UIRenderer.messages.pending);
    return fetch(this.getUrlFrom(request), this.api.fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        UIRenderer.displayBooksMessage(
          UIRenderer.messages.error + "</br>" + error
        );
        throw error;
      });
  }

  static getUrlFrom(text) {
    if (!text) return this.api.baseUrl + this.api.defaultRequest;
    return this.api.baseUrl + encodeURIComponent(text);
  }
}
