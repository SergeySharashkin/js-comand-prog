import axios from 'axios';
import {BASE_URL, KEY, LANGUAGE, POPULAR_FILM_FETCH, SEARCH__MOVIE } from './constants';
let queryString = '';

export const fetchFilms = async ({query = '', page = 1, type = POPULAR_FILM_FETCH} = {}) => {
  try {
    if (query) {
      queryString = query;
    }
    if(queryString) {
      type = SEARCH__MOVIE;
    }
    const response = await axios.get(`${BASE_URL}${type}?api_key=${KEY}&page=${page}&language=${LANGUAGE}&query=${queryString}`);
    return await response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const clearQueryString = () => {
  queryString = '';
}