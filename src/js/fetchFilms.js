import axios from 'axios';
import { renderFilmsMarkup } from './renderFilmsMarkup';
import { KEY, LANGUAGE } from './constants';

export const fetchFilms = async (url, query) => {
  try {
    if(query) {
      const response = await axios.get(`${url}&query=${query}`);
      const popularFilms = await response.data;
      const { results, total_pages } = popularFilms;
      console.log(results);
      renderFilmsMarkup(results);
    } else {
      const response = await axios.get(url);
      const popularFilms = await response.data;
      const { results, total_pages } = popularFilms;
      renderFilmsMarkup(results);
    }
  } catch (error) {
    console.log(error.message);
  }
};


// //query get movies from form