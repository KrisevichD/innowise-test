import "./style.css";
import bookSvg from "@/assets/book.svg";
import sunSvg from "@/assets/sun.svg";
import heartSvg from "@/components/HeartIcon/heartSvg";

export default () => `
<header class="header">
<div class="header__inner">
  <div class="header__block">
    <div class="header__logo logo">
        <img src="${bookSvg}" width="24" height="24" class="logo__img" />
    </div>
    <div>
        <p class="header__title">The Library</p>
        <p class="header__subtitle">Discover your next favorite book</p>
    </div>
  </div>
  <div class="header__block">
    <button class="button button--theme" data-js-theme-button>
      <img src="${sunSvg}"/>
    </button>
    <button class="button button--favorites" data-js-header-favorite>
      ${heartSvg(22, 22)}
    </button>
  </div>
</div>
</header>
`;

//
