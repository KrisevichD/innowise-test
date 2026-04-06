import "./style.css";
import heartSvg from "@/components/HeartIcon/heartSvg";

export default () => `
<section class="favorites" data-js-favorites-section>
    <div class="favorites__header">
      <div class="favorites__icon">
        ${heartSvg(24, 24)}
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
`;
