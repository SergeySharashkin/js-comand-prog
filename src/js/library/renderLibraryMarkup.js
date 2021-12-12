import coverImage from '../../images/default_image.jpg';
import { refs } from '../refs';

export const renderLibraryMarkup = films => {
  const filmsMarkup = films
    .map(({ alt, date, count, genres, id, original, overview, popularity, rating, url }) => {
      let imageSrc = coverImage;
      if (url) {
        imageSrc = url;
      }
      if (!original) {
        original = '---';
      }
      return `<li class="film-list__item list-item">
          <a class="list-item__link" href="#" >
            <div class="list-item__thumb">
              <img
                class="list-item__img"
                src="${imageSrc}"
                alt="${alt}"
                data-id="${id}"
                data-url="${imageSrc}"
                data-original="${original}"
                data-overview="${overview}"
                data-popularity="${popularity}"
                data-rating="${rating}"
                data-count="${count}"
                data-genres="${genres}"
                width="300px"
                loading="lazy"
              />
            </div>
            <div class="list-item__content">
              <h3 class="list-item__title">${alt}</h3>
              <div class="list-item__info">
                <p class="list-item__text">${genres} &VerticalLine; ${date}</p>
                <span class="rating-span">${rating}</span>
              </div>
            </div>
          </a>
        </li>
  `;
    })
    .join('');
  refs.container.innerHTML = filmsMarkup;
};
