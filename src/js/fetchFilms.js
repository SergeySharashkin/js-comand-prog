import axios from 'axios';
import { renderFilmsMarkup } from './renderFilmsMarkup';

export const fetchFilms = async url => {
  try {
    const response = await axios.get(url);
    const popularFilms = await response.data;
    const { results, total_pages } = popularFilms;
    renderFilmsMarkup(results);
  } catch (error) {
    console.log(error.message);
  }
};
