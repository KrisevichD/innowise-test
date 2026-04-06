import "./style.css";
import heartSvg from "@/components/HeartIcon/heartSvg";

export default (id, title, author, year, cover) => `
<div class="card">
    <img src="${cover}" alt="" class="card__cover">
    <div class="card__description">
        <div class="expandable">
            <p class="card__title">${title}</p>
            <p class="card__author">${author}</p>
            <p class="card__year">${year}</p>
        </div>
    </div>
    <button class="card__favorite-btn" data-js-card-btn=${id}>
        ${heartSvg()}
    </button>
</div>
`;
