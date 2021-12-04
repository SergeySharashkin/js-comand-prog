import { convertIdsToGenres } from './getGenres';
import { getRefs } from './getRefs';
const refs = getRefs();
export const renderFilmsMarkup = films => {
  const popularFilmsMarkup = films
    .map(({ title, poster_path, release_date, genre_ids }) => {
      let imageSrc = 'default-image.jpg';
        if(poster_path) {
          imageSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;
        }
      const data = new Date(release_date).getFullYear();
      return `<li class="film-list__item list-item">
        <a class="list-item__link" href="">
          <div class="film-list__thumb">
            <img
              src="${imageSrc}"
              alt="${title}"
              width="300px"
              loading="lazy"
            />
          </div>
          <div class="film-list__content">
            <h3 class="film-list__item-title">${title}</h3>
            <p class="film-list__item-text">
              ${convertIdsToGenres(genre_ids)} &VerticalLine; ${data}
            </p>
          </div>
        </a>
      </li>
`;
    })
    .join('');
  refs.container.innerHTML = popularFilmsMarkup;
};
