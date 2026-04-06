(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%207V21'%20stroke='%23F8F6F1'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%2018C2.73478%2018%202.48043%2017.8946%202.29289%2017.7071C2.10536%2017.5196%202%2017.2652%202%2017V4C2%203.73478%202.10536%203.48043%202.29289%203.29289C2.48043%203.10536%202.73478%203%203%203H8C9.06087%203%2010.0783%203.42143%2010.8284%204.17157C11.5786%204.92172%2012%205.93913%2012%207C12%205.93913%2012.4214%204.92172%2013.1716%204.17157C13.9217%203.42143%2014.9391%203%2016%203H21C21.2652%203%2021.5196%203.10536%2021.7071%203.29289C21.8946%203.48043%2022%203.73478%2022%204V17C22%2017.2652%2021.8946%2017.5196%2021.7071%2017.7071C21.5196%2017.8946%2021.2652%2018%2021%2018H15C14.2044%2018%2013.4413%2018.3161%2012.8787%2018.8787C12.3161%2019.4413%2012%2020.2044%2012%2021C12%2020.2044%2011.6839%2019.4413%2011.1213%2018.8787C10.5587%2018.3161%209.79565%2018%209%2018H3Z'%20stroke='%23F8F6F1'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e`,t=`data:image/svg+xml,%3csvg%20width='22px'%20height='22px'%20viewBox='0%200%2071.084%2071.084'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Sun'%20transform='translate(1.542%201.542)%20scale(1)'%3e%3cg%20id='Oval-9'%3e%3cpath%20id='Path_8'%20data-name='Path%208'%20d='M34,54A20,20,0,1,1,54,34,20.022,20.022,0,0,1,34,54Zm0-36A16,16,0,1,0,50,34,16.018,16.018,0,0,0,34,18Z'%20fill='%23daa520'/%3e%3c/g%3e%3cg%20id='Line_1_'%3e%3cpath%20id='Path_9'%20data-name='Path%209'%20d='M34,69.542a2,2,0,0,1-2-2V52a2,2,0,0,1,4,0V67.542A2,2,0,0,1,34,69.542Zm23.718-9.824a1.993,1.993,0,0,1-1.414-.586l-10.99-10.99a2,2,0,0,1,2.828-2.828L59.132,56.3a2,2,0,0,1-1.414,3.414Zm-47.436,0A2,2,0,0,1,8.868,56.3l10.99-10.99a2,2,0,0,1,2.828,2.828L11.7,59.132A1.993,1.993,0,0,1,10.282,59.718ZM67.542,36H52a2,2,0,0,1,0-4H67.542a2,2,0,0,1,0,4ZM16,36H.458a2,2,0,1,1,0-4H16a2,2,0,0,1,0,4ZM46.728,23.272a2,2,0,0,1-1.414-3.414L56.3,8.869A2,2,0,0,1,59.132,11.7L48.142,22.686A1.993,1.993,0,0,1,46.728,23.272Zm-25.455,0a1.993,1.993,0,0,1-1.414-.586L8.868,11.7A2,2,0,0,1,11.7,8.869l10.99,10.989a2,2,0,0,1-1.414,3.414ZM34,18a2,2,0,0,1-2-2V.458a2,2,0,0,1,4,0V16A2,2,0,0,1,34,18Z'%20fill='%23daa520'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`,n=(e,t)=>`
<svg class="icon" width="${e||`16`}" height="${t||`16`}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 9.33333C13.66 8.36 14.6667 7.19333 14.6667 5.66667C14.6667 4.69421 14.2804 3.76158 13.5928 3.07394C12.9051 2.38631 11.9725 2 11 2C9.82671 2 9.00004 2.33333 8.00004 3.33333C7.00004 2.33333 6.17337 2 5.00004 2C4.02758 2 3.09495 2.38631 2.40732 3.07394C1.71968 3.76158 1.33337 4.69421 1.33337 5.66667C1.33337 7.2 2.33337 8.36667 3.33337 9.33333L8.00004 14L12.6667 9.33333Z" stroke="#7C736A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,r=()=>`
<header class="header">
<div class="header__inner">
  <div class="header__block">
    <div class="header__logo logo">
        <img src="${e}" width="24" height="24" class="logo__img" />
    </div>
    <div>
        <p class="header__title">The Library</p>
        <p class="header__subtitle">Discover your next favorite book</p>
    </div>
  </div>
  <div class="header__block">
    <button class="button button--theme" data-js-theme-button>
      <img src="${t}"/>
    </button>
    <button class="button button--favorites" data-js-header-favorite>
      ${n(22,22)}
    </button>
  </div>
</div>
</header>
`,i=()=>`    
<div class="search">
<form class="search__form" data-js-search-form>
  <input type="text" class="search__input" placeholder="Search for books by title or author..." data-js-search-input>
</form>
</div>
`,a=()=>`
<section class="favorites" data-js-favorites-section>
    <div class="favorites__header">
      <div class="favorites__icon">
        ${n(24,24)}
      </div>
      <div>
        <p class="favorites__title">Favorites</p>
        <p class="favorites__subtitle">
          <span data-js-favorites-amount>
            0
          </span>
          books saved
        </p>
      </div>
    </div>
  <div class="favorites__list" data-js-favorites-list>
  </div>
</section>
`,o=class{storageName=`theme`;selectors={button:`[data-js-theme-button]`};themes={light:`light`,dark:`dark`};defaultTheme=this.themes.light;constructor(){this.buttonElement=document.querySelector(this.selectors.button),this.theme=this.initTheme(),this.bindEvents()}initTheme(){switch(localStorage.getItem(this.storageName)){case this.themes.light:return this.themes.light;case this.themes.dark:return document.body.classList.toggle(`is-dark-theme`),this.themes.dark;default:return localStorage.setItem(this.storageName,this.defaultTheme),this.defaultTheme}}bindEvents(){this.buttonElement.addEventListener(`click`,()=>{document.body.classList.toggle(`is-dark-theme`),this.theme===this.themes.light?this.theme=this.themes.dark:this.theme=this.themes.light,localStorage.setItem(this.storageName,this.theme)})}},s=(e,t,r,i,a)=>`
<div class="card">
    <img src="${a}" alt="" class="card__cover">
    <div class="card__description">
        <div class="expandable">
            <p class="card__title">${t}</p>
            <p class="card__author">${r}</p>
            <p class="card__year">${i}</p>
        </div>
    </div>
    <button class="card__favorite-btn" data-js-card-btn=${e}>
        ${n()}
    </button>
</div>
`,c=(e,t,r,i,a)=>`
    <div class="favcard">
        <img src="${a}" class="favcard__cover"/>
        <div>
            <p class="favcard__title">${t}</p>
            <p class="favcard__author">${r}</p>
            <p class="favcard__year">${i}</p>
        </div>
        <button class="favcard__btn" data-js-favorites-btn="${e}">
            ${n()}
        </button>
    </div>
`,l=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056.69%2085.04'%3e%3crect%20width='56.69'%20height='85.04'%20style='fill:%23c4b8a8'/%3e%3cpath%20d='M28.35,39.68v8'%20transform='translate(0%200)'%20style='fill:none;stroke:%23f8f6f1;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px'/%3e%3cpath%20d='M23.23,45.93a.56.56,0,0,1-.4-.17.54.54,0,0,1-.17-.4V38a.58.58,0,0,1,.57-.57h2.84a2.29,2.29,0,0,1,2.28,2.28,2.27,2.27,0,0,1,2.27-2.28h2.84a.54.54,0,0,1,.4.17A.56.56,0,0,1,34,38v7.39a.58.58,0,0,1-.57.57H30.05a1.71,1.71,0,0,0-1.7,1.71,1.7,1.7,0,0,0-.5-1.21,1.72,1.72,0,0,0-1.21-.5Z'%20transform='translate(0%200)'%20style='fill:none;stroke:%23f8f6f1;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px'/%3e%3c/svg%3e`,u=class e{static classes={isMessage:`is-message`,isVisible:`is-visible`,isOpened:`is-opened`};static selectors={booksList:`[data-js-books-list]`,favoritesList:`[data-js-favorites-list]`,favoriteAmount:`[data-js-favorites-amount]`,favoriteHeaderBtn:`[data-js-header-favorite]`,favoritesSection:`[data-js-favorites-section]`};static messages={pending:`Books are loading... `,error:`Unable to load data! `,empty:`There are no books with the specified parameters.`,shortInput:`The request must contain at least 3 characters.`};static displayBooksMessage(e){let t=document.querySelector(this.selectors.booksList);t.innerHTML=e,t.classList.add(this.classes.isMessage)}static displayBooksList(t){let n=document.querySelector(this.selectors.booksList);if(n.innerHTML=``,n.classList.remove(this.classes.isMessage),t.length===0){e.displayBooksMessage(this.messages.empty);return}t.forEach(e=>{let t=this.validateBookData(e);this.renderCard(`book`,n,t)})}static validateBookData(e){let t=e;return e.title||(t.title=`-`),e.author_name||(t.author_name=`-`),e.first_publish_year||(t.first_publish_year=`-`),t}static renderCard(e,t,n){let r=document.createElement(`div`),i;switch(e){case`book`:i=n.cover_i?`https://covers.openlibrary.org/b/id/${n.cover_i}-M.jpg`:l,r.innerHTML=s(n.key,n.title,n.author_name,n.first_publish_year,i);break;case`favorite`:i=n.cover_i?`https://covers.openlibrary.org/b/id/${n.cover_i}-S.jpg`:l,r.innerHTML=c(n.key,n.title,n.author_name,n.first_publish_year,i);break;default:return}t.appendChild(r)}static displayFavoritesList(e){let t=document.querySelector(this.selectors.favoritesList),n=document.querySelector(this.selectors.favoriteAmount);t.innerHTML=``,n.innerHTML=e.length,e&&e.forEach(e=>{this.renderCard(`favorite`,t,e)})}static bindEvents(){let e=document.querySelector(this.selectors.favoriteHeaderBtn),t=document.querySelector(this.selectors.favoritesSection);e.addEventListener(`click`,()=>{e.classList.toggle(this.classes.isOpened),t.classList.toggle(this.classes.isVisible)})}},d=class{static getArrayFromStorage(e){let t=localStorage.getItem(e);return t?JSON.parse(t):[]}static setDataToStorage(e,t){return t?(localStorage.setItem(e,JSON.stringify(t)),!0):!1}},f=class{static api={baseUrl:`https://openlibrary.org/search.json?q=`,defaultRequest:`test`,fetchOptions:{method:`GET`}};static async fetchBooksData(e){return u.displayBooksMessage(u.messages.pending),fetch(this.getUrlFrom(e),this.api.fetchOptions).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>e).catch(e=>{throw u.displayBooksMessage(u.messages.error+`</br>`+e),e})}static getUrlFrom(e){return e?this.api.baseUrl+encodeURIComponent(e):this.api.baseUrl+this.api.defaultRequest}},p=class{selectors={cardButtons:`data-js-card-btn`,favoriteButtons:`[data-js-favorites-btn]`,searchInput:`[data-js-search-input]`,searchForm:`[data-js-search-form]`};classes={isFavorite:`is-favorite`};states={books:[],favorites:[]};proxyHandler={set(e,t,n){return e[t]=n,t===`books`&&u.displayBooksList(e.books),t===`favorites`&&(u.displayFavoritesList(e.favorites),d.setDataToStorage(`favorites`,e.favorites)),!0}};constructor(){this.proxyStates=new Proxy(this.states,this.proxyHandler),this.proxyStates.favorites=d.getArrayFromStorage(`favorites`),this.bindFavoritesEvents(),this.bindInputEvent(),f.fetchBooksData().then(e=>this.setBooksData(e))}setBooksData(e){e&&(this.proxyStates.books=e.docs,this.bindBookCardEvents())}bindInputEvent(){let e=document.querySelector(this.selectors.searchForm),t=document.querySelector(this.selectors.searchInput);e.addEventListener(`submit`,e=>e.preventDefault()),t.addEventListener(`input`,e=>this.debounceInputHandler(e.target.value))}debounceInputHandler=this.debounce(e=>{this.inputHandler(e)});debounce(e,t=1e3){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{e(...r)},t)}}inputHandler(e){if(e&&e.length<3){u.displayBooksMessage(u.messages.shortInput);return}f.fetchBooksData(e).then(e=>this.setBooksData(e))}bindBookCardEvents(){document.querySelectorAll(`[${this.selectors.cardButtons}]`).forEach(e=>{let t=e.dataset.jsCardBtn;this.isFavorite(t)&&e.classList.add(this.classes.isFavorite),e.addEventListener(`click`,()=>{this.cardClickHandler(t),e.classList.toggle(this.classes.isFavorite)})})}isFavorite(e){return this.proxyStates.favorites.some(t=>t.key===e)}cardClickHandler(e){let t=this.proxyStates.books.find(t=>t.key==e);this.isFavorite(e)?this.removeFavoriteByKey(e):this.addFavorite(t)}bindFavoritesEvents(){document.querySelectorAll(this.selectors.favoriteButtons).forEach(e=>e.addEventListener(`click`,()=>{let t=e.dataset.jsFavoritesBtn,n=document.querySelector(`[${this.selectors.cardButtons}="${t}"]`);this.removeFavoriteByKey(t),n&&n.classList.remove(this.classes.isFavorite)}))}addFavorite(e){let t=this.proxyStates.favorites;t.push(e),this.proxyStates.favorites=t,this.bindFavoritesEvents()}removeFavoriteByKey(e){let t=this.proxyStates.favorites,n=t.findIndex(t=>t.key===e);t.splice(n,1),this.proxyStates.favorites=t,this.bindFavoritesEvents()}};document.querySelector(`#app`).innerHTML=`
${r()}
<section class="main">
    <div class="main__inner">
      <h1>Discover Your Next Great Read</h1>
      <h2>Search millions of books, build your personal library, and never lose track of </br>what to read next.</h2>
      ${i()}
      <div class="books">
        <div class="books__list" data-js-books-list></div>
        <div class="books__favorites">
          ${a()}
        </div>
      </div>
    </div>
</section> 
`,new o,new p,u.bindEvents();