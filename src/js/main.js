// import { RenderClass } from './fetch-class';
// const render = new RenderClass();
import { getRelevantGenresIds } from './getGenres';
import { fetchFilms } from './fetchFilms';
import { getRefs } from './getRefs';
const refs = getRefs();
import { KEY, BASE_URL, POPULAR_FILM_FETCH, SEARCH__MOVIE, LANGUAGE } from './constants';
getRelevantGenresIds();
fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}&language=${LANGUAGE}`);
refs.homeLink.addEventListener('click', e => {
  e.preventDefault();
  fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}&language=${LANGUAGE}`);
});
refs.homeLogo.addEventListener('click', e => {
  e.preventDefault();
  fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}&language=${LANGUAGE}`);
});
refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  let searchValue = e.target.elements.search.value.trim();
  fetchFilms(`${BASE_URL}${SEARCH__MOVIE}?api_key=${KEY}&language=${LANGUAGE}`, searchValue);
});


