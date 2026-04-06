import BookCard from "@/components/BookCard";
import FavCard from "@/components/FavCard";
import defaultCover from "@/assets/defaultCover.svg";

export default class UIRenderer {
  static classes = {
    isMessage: "is-message",
    isVisible: "is-visible",
    isOpened: "is-opened",
  };

  static selectors = {
    booksList: "[data-js-books-list]",
    favoritesList: "[data-js-favorites-list]",
    favoriteAmount: "[data-js-favorites-amount]",
    favoriteHeaderBtn: "[data-js-header-favorite]",
    favoritesSection: "[data-js-favorites-section]",
  };

  static messages = {
    pending: "Books are loading... ",
    error: "Unable to load data! ",
    empty: "There are no books with the specified parameters.",
    shortInput: "The request must contain at least 3 characters.",
  };

  static displayBooksMessage(message) {
    let booksList = document.querySelector(this.selectors.booksList);
    booksList.innerHTML = message;
    booksList.classList.add(this.classes.isMessage);
  }

  static displayBooksList(data) {
    let booksList = document.querySelector(this.selectors.booksList);
    booksList.innerHTML = "";
    booksList.classList.remove(this.classes.isMessage);
    if (data.length === 0) {
      UIRenderer.displayBooksMessage(this.messages.empty);
      return;
    }
    data.forEach((book) => {
      let validBook = this.validateBookData(book);
      this.renderCard("book", booksList, validBook);
    });
  }

  static validateBookData(book) {
    let result = book;
    if (!book.title) result.title = "-";
    if (!book.author_name) result.author_name = "-";
    if (!book.first_publish_year) result.first_publish_year = "-";
    return result;
  }

  static renderCard(cardType, root, book) {
    let bookItem = document.createElement("div");
    let imgSrc;
    switch (cardType) {
      case "book": {
        imgSrc = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : defaultCover;
        bookItem.innerHTML = BookCard(
          book.key,
          book.title,
          book.author_name,
          book.first_publish_year,
          imgSrc
        );
        break;
      }
      case "favorite": {
        imgSrc = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`
          : defaultCover;
        bookItem.innerHTML = FavCard(
          book.key,
          book.title,
          book.author_name,
          book.first_publish_year,
          imgSrc
        );
        break;
      }
      default: {
        return;
      }
    }
    root.appendChild(bookItem);
  }

  static displayFavoritesList(data) {
    let listElement = document.querySelector(this.selectors.favoritesList);
    let amountElement = document.querySelector(this.selectors.favoriteAmount);
    listElement.innerHTML = "";
    amountElement.innerHTML = data.length;
    if (!data) return;
    data.forEach((book) => {
      this.renderCard("favorite", listElement, book);
    });
  }

  static bindEvents() {
    let btn = document.querySelector(this.selectors.favoriteHeaderBtn);
    let favList = document.querySelector(this.selectors.favoritesSection);
    btn.addEventListener("click", () => {
      btn.classList.toggle(this.classes.isOpened);
      favList.classList.toggle(this.classes.isVisible);
    });
  }
}
