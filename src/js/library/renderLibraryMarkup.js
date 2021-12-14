import coverImage from '../../images/default_image.jpg';
import { refs } from '../refs';
import { genresForLibrary, genresForModal } from '../getGenres';
import axios from 'axios';
import { KEY, BASE_URL, LANGUAGE, SEARCH_BY_ID } from '../constants';

export const renderLibraryMarkup = films => {
  if (!films.length) {
    refs.container.innerHTML = '';
    return;
  }
  films.map(({ id }) => {
    refs.container.innerHTML = '';
    axios
      .get(`${BASE_URL}${SEARCH_BY_ID}${id}?api_key=${KEY}&language=${LANGUAGE}`)
      .then(response => response.data)
      .then(
        ({
          genres,
          original_title,
          overview,
          popularity,
          poster_path,
          release_date,
          title,
          vote_average,
          vote_count,
        }) => {
          let imageSrc = coverImage;
          if (poster_path) {
            imageSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;
          }
          if (!original_title) {
            original_title = '---';
          }
          const date = new Date(release_date).getFullYear();
          const libraryMarkup = `<li class="film-list__item list-item">
              <a class="list-item__link" href="#" >
                <div class="list-item__thumb">
                <img
                class="list-item__img"
                src="${imageSrc}"
                alt="${title}"
                data-id="${id}"
                data-url="${imageSrc}"
                data-original="${original_title}"
                data-overview="${overview}"
                data-popularity="${popularity}"
                data-rating="${vote_average}"
                data-count="${vote_count}"
                data-genres="${genresForModal(genres)}"
                data-date="${date}"
                width="300px"
                loading="lazy"
              />
                  </div>
                <div class="list-item__content">
                  <h3 class="list-item__title">${title}</h3>
                  <div class="list-item__info">
                    <p class="list-item__text">${genresForLibrary(genres)} &VerticalLine; ${date}
                      &nbsp<span class="rating-span">${vote_average}</span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
      `;
          return refs.container.insertAdjacentHTML('beforeend', libraryMarkup);
        },
      );
  });
};
