import "./style.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import FavList from "./components/FavList";
import ThemeManager from "./scripts/ThemeManager";
import StateManager from "./scripts/StateManager";
import UIRenderer from "./scripts/UIRenderer";

document.querySelector("#app").innerHTML = `
${Header()}
<section class="main">
    <div class="main__inner">
      <h1>Discover Your Next Great Read</h1>
      <h2>Search millions of books, build your personal library, and never lose track of </br>what to read next.</h2>
      ${SearchForm()}
      <div class="books">
        <div class="books__list" data-js-books-list></div>
        <div class="books__favorites">
          ${FavList()}
        </div>
      </div>
    </div>
</section> 
`;

new ThemeManager();
new StateManager();
UIRenderer.bindEvents();
