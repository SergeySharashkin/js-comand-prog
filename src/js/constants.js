const KEY = '6523fa24eefdcfaabad3a6688685bc24';
const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_FILM_FETCH = '/trending/movie/day';
const RELEVANT_GENRES_LIST = '/genre/movie/list';
const SEARCH__MOVIE = '/search/movie';
const SEARCH_BY_ID = '/movie/';
let LANGUAGE = JSON.parse(localStorage.getItem('language'));
if (!LANGUAGE) {
  LANGUAGE = 'ru';
}
export {
  KEY,
  BASE_URL,
  POPULAR_FILM_FETCH,
  RELEVANT_GENRES_LIST,
  SEARCH__MOVIE,
  LANGUAGE,
  SEARCH_BY_ID,
};
