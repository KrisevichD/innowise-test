import UIRenderer from "./UIRenderer";
import StorageManager from "./StorageManager";
import APIManager from "./APIManager";

export default class StateManager {
  selectors = {
    cardButtons: "data-js-card-btn",
    favoriteButtons: "[data-js-favorites-btn]",
    searchInput: "[data-js-search-input]",
    searchForm: "[data-js-search-form]",
  };

  classes = {
    isFavorite: "is-favorite",
  };

  states = {
    books: [],
    favorites: [],
  };

  proxyHandler = {
    set(target, prop, value) {
      target[prop] = value;

      // Rendering UI after changing states
      if (prop === "books") {
        UIRenderer.displayBooksList(target.books);
      }
      if (prop === "favorites") {
        UIRenderer.displayFavoritesList(target.favorites);
        StorageManager.setDataToStorage("favorites", target.favorites);
      }
      return true;
    },
  };

  constructor() {
    this.proxyStates = new Proxy(this.states, this.proxyHandler);
    this.proxyStates.favorites =
      StorageManager.getArrayFromStorage("favorites");
    this.bindFavoritesEvents();
    this.bindInputEvent();
    APIManager.fetchBooksData().then((data) => this.setBooksData(data));
  }

  setBooksData(data) {
    if (!data) return;
    this.proxyStates.books = data.docs;
    this.bindBookCardEvents();
  }

  // Methods that implement the search input logic

  bindInputEvent() {
    let form = document.querySelector(this.selectors.searchForm);
    let input = document.querySelector(this.selectors.searchInput);
    form.addEventListener("submit", (e) => e.preventDefault());
    input.addEventListener("input", (e) =>
      this.debounceInputHandler(e.target.value)
    );
  }

  debounceInputHandler = this.debounce((text) => {
    this.inputHandler(text);
  });

  debounce(callback, delay = 1000) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }

  inputHandler(request) {
    if (request && request.length < 3) {
      UIRenderer.displayBooksMessage(UIRenderer.messages.shortInput);
      return;
    }
    APIManager.fetchBooksData(request).then((data) => this.setBooksData(data));
  }

  // Methods that implement the logic of working with buttons on book cards

  bindBookCardEvents() {
    let btns = document.querySelectorAll(`[${this.selectors.cardButtons}]`);
    btns.forEach((element) => {
      let key = element.dataset.jsCardBtn;
      if (this.isFavorite(key)) element.classList.add(this.classes.isFavorite);
      element.addEventListener("click", () => {
        this.cardClickHandler(key);
        element.classList.toggle(this.classes.isFavorite);
      });
    });
  }

  isFavorite(key) {
    return this.proxyStates.favorites.some((e) => e.key === key);
  }

  cardClickHandler(key) {
    let book = this.proxyStates.books.find((e) => e.key == key);
    if (this.isFavorite(key)) {
      this.removeFavoriteByKey(key);
    } else {
      this.addFavorite(book);
    }
  }

  // Methods that implement the logic of buttons in the favorites list

  bindFavoritesEvents() {
    let btns = document.querySelectorAll(this.selectors.favoriteButtons);
    btns.forEach((element) =>
      element.addEventListener("click", () => {
        let key = element.dataset.jsFavoritesBtn;
        let relatedBtn = document.querySelector(
          `[${this.selectors.cardButtons}="${key}"]`
        );
        this.removeFavoriteByKey(key);
        if (relatedBtn) relatedBtn.classList.remove(this.classes.isFavorite);
      })
    );
  }

  addFavorite(data) {
    let res = this.proxyStates.favorites;
    res.push(data);
    this.proxyStates.favorites = res;
    this.bindFavoritesEvents();
  }

  removeFavoriteByKey(key) {
    let res = this.proxyStates.favorites;
    let index = res.findIndex((element) => element.key === key);
    res.splice(index, 1);
    this.proxyStates.favorites = res;
    this.bindFavoritesEvents();
  }
}
