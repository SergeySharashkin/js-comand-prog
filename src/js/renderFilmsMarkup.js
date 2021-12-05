import { convertIdsToGenres } from './getGenres';
import { refs } from './refs';
export const renderFilmsMarkup = films => {
  const popularFilmsMarkup = films
    .map(
      ({
        title,
        poster_path,
        release_date,
        genre_ids,
        id,
        overview,
        popularity,
        vote_average,
        vote_count,
      }) => {
        let imageSrc = 'default-image.jpg';
        if (poster_path) {
          imageSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;
        }
<<<<<<< Updated upstream
      const data = new Date(release_date).getFullYear();
      return `<li class="film-list__item list-item">
        <a class="list-item__link" href="">
          <div class="list-item__thumb">
=======
        const data = new Date(release_date).getFullYear();
        return `<li class="film-list__item list-item">
        <a class="list-item__link" href="#" >
          <div class="film-list__thumb">
>>>>>>> Stashed changes
            <img
              class="list-item__img"
              src="${imageSrc}"
              alt="${title}"
              data-id="${id}"
              data-overview="${overview}"
              data-popularity="${popularity}"
              data-rating="${vote_average}"
              data-count="${vote_count}"
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
      },
    )
    .join('');
  refs.container.innerHTML = popularFilmsMarkup;
};
