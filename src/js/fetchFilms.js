import axios from 'axios';
import { renderFilmsMarkup } from './renderFilmsMarkup';
import { pagination } from './pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
export let page = Number(sessionStorage.getItem('mainPage')) || 1;
let filmCardLink = null;

export const fetchFilms = async (url, query) => {
  try {
    if (query) {
      const response = await axios.get(`${url}&query=${query}`);
      const popularFilms = await response.data;
      const { results, total_pages, page } = popularFilms;
      let totalPages = total_pages;
      renderFilmsMarkup(results);
      pagination({totalPages, page, currentPage: 'main'})
    } else {
      const response = await axios.get(url);
      const popularFilms = await response.data;
      const { results, total_pages , page} = popularFilms;
      let totalPages = total_pages;
      renderFilmsMarkup(results);
      pagination({totalPages, page, currentPage: 'main'})
    }
  } catch (error) {
    console.log(error.message);
  }
};