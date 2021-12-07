import Pagination from 'tui-pagination';
import { refs } from './refs';
import { fetchFilms, page } from './fetchFilms';
import { BASE_URL, KEY, LANGUAGE, POPULAR_FILM_FETCH, mediaQueryMaxWidth768, mediaQueryMinWidth769 } from './constants';

export function pagination({ totalPages, query, currentPage, page }) {

  if (totalPages === null) {
    return;
  }

  const instance = new Pagination(refs.tuiContainer, {
    totalItems: totalPages,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    page: page,
  });

  instance.on('beforeMove', function(eventData) {
    if (currentPage === 'main') {
      sessionStorage.setItem('mainPage', eventData.page);
      fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}&page=${eventData.page}&language=${LANGUAGE}`);
    } else if (currentPage === 'resultFetch') {
      fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}&page=${eventData.page}&language=${LANGUAGE}`);
    }
  });
}