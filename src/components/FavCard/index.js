import "./style.css";
import heartSvg from "@/components/HeartIcon/heartSvg";

export default (id, title, author, year, cover) => `
    <div class="favcard">
        <img src="${cover}" class="favcard__cover"/>
        <div>
            <p class="favcard__title">${title}</p>
            <p class="favcard__author">${author}</p>
            <p class="favcard__year">${year}</p>
        </div>
        <button class="favcard__btn" data-js-favorites-btn="${id}">
            ${heartSvg()}
        </button>
    </div>
`;
