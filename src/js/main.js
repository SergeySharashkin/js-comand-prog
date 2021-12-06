import { getRelevantGenresIds } from './getGenres';
import { fetchFilms } from './fetchFilms';
import { refs } from './refs';
import { KEY, BASE_URL, POPULAR_FILM_FETCH, SEARCH__MOVIE, LANGUAGE } from './constants';
import { openInfoModal } from './openInfoModal';
// import { fetchExtendedInfo } from './fetchExtendInfo';
getRelevantGenresIds();
fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}&language=${LANGUAGE}`);
refs.homeLink.addEventListener('click', e => {
  e.preventDefault();
  fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}&language=${LANGUAGE}`).then();
});
refs.homeLogo.addEventListener('click', e => {
  e.preventDefault();
  fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}&language=${LANGUAGE}`);
});
refs.form.addEventListener('submit', e => {
  e.preventDefault();
  let searchValue = e.target.elements.search.value.trim();
  fetchFilms(`${BASE_URL}${SEARCH__MOVIE}?api_key=${KEY}&language=${LANGUAGE}`, searchValue);
});
refs.container.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const filmId = e.target.dataset.id;
  openInfoModal(e);
});
