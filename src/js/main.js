// import { RenderClass } from './fetch-class';
// const render = new RenderClass();
import { getRelevantGenresIds } from './getGenres';
import { fetchFilms } from './fetchFilms';
import { getRefs } from './getRefs';
const refs = getRefs();
import { KEY, BASE_URL, POPULAR_FILM_FETCH } from './constants';
getRelevantGenresIds();
fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}`);
refs.homeLink.addEventListener('click', e => {
  e.preventDefault();
  fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}`);
});
refs.homeLogo.addEventListener('click', e => {
  e.preventDefault();
  fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}`);
});
