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
          <div class="list-item__thumb">
            <img
              class="list-item__img"
              src="${imageSrc}"
              alt="${title}"
              width="300px"
              loading="lazy"
            />
          </div>
          <div class="list-item__content">
            <h3 class="list-item__title">${title}</h3>
            <p class="list-item__text">
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
