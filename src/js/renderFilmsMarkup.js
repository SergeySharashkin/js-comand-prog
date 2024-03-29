import coverImage from '../images/default_image.jpg';
import { convertIdsToGenres, popularGenresModal } from './getGenres';
import { refs } from './refs';
import { Notify } from 'notiflix';
import { selectedLanguage } from './MultiLanguage/languageState';
const { notifies } = selectedLanguage;
export const renderFilmsMarkup = films => {
  if (!films.length) {
    Notify.failure(notifies.invalidSearch);
    return;
  }
  const FilmsMarkup = films
    .map(
      ({
        title,
        original_title,
        poster_path,
        release_date,
        genre_ids,
        id,
        overview,
        popularity,
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
        return `<li class="film-list__item list-item">
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
              data-genres="${popularGenresModal(genre_ids)}"
              data-date="${date}"
              width="300px"
              loading="lazy"
            />
          </div>
          <div class="list-item__content">
            <h3 class="list-item__title">${title}</h3>
            <p class="list-item__text">
              ${convertIdsToGenres(genre_ids)} &VerticalLine; ${date}
            </p>
          </div>
        </a>
      </li>
`;
      },
    )
    .join('');
  refs.container.innerHTML = FilmsMarkup;
};
