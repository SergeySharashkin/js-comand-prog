import axios from 'axios';
import { BASE_URL, KEY, LANGUAGE, POPULAR_FILM_FETCH, SEARCH__MOVIE } from './constants';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix';
import { selectedLanguage } from './MultiLanguage/languageState';
const {
  notifies: { invalidSearch },
} = selectedLanguage;
let queryString = '';

export const fetchFilms = async ({ query = '', page = 1, type = POPULAR_FILM_FETCH } = {}) => {
  try {
    if (query) {
      queryString = query;
      Loading.pulse({ svgColor: '#ff6b08' });
    }

    if (queryString) {
      type = SEARCH__MOVIE;
    }
    const response = await axios.get(
      `${BASE_URL}${type}?api_key=${KEY}&page=${page}&language=${LANGUAGE}&query=${queryString}`,
    );

    if(response.data.results.length === 0) {
      sessionStorage.clear();
      type = POPULAR_FILM_FETCH;
      const response = await axios.get(
        `${BASE_URL}${type}?api_key=${KEY}&page=${page}&language=${LANGUAGE}&query=${queryString}`,
      );
      Loading.remove();
      Notify.failure(invalidSearch);
      return response.data;
    }
    Loading.remove();
    return await response.data;
  } catch (error) {
    console.log(error.message);
    Loading.remove();
  }
};

export const clearQueryString = () => {
  queryString = '';
};
