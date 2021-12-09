import { getRelevantGenresIds } from './getGenres';
import { fetchFilms, page } from './fetchFilms';
import { refs } from './refs';
import { KEY, BASE_URL, POPULAR_FILM_FETCH, SEARCH__MOVIE, LANGUAGE } from './constants';
import { openInfoModal } from './openInfoModal';
import { onMyLibraryClick, onHomeClick } from './header';
import './Trailer/onTrailerBtnClick';
import './snow';

getRelevantGenresIds();
fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}&page=${page}&language=${LANGUAGE}`);
refs.homeLink.addEventListener('click', e => {
  e.preventDefault();
  sessionStorage.removeItem('mainPage');
  fetchFilms(`${BASE_URL}${POPULAR_FILM_FETCH}?api_key=${KEY}&language=${LANGUAGE}`);
});

refs.homeLogo.addEventListener('click', e => {
  e.preventDefault();
  sessionStorage.removeItem('mainPage');
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
  setTimeout(() => {
    openInfoModal(e);
  }, 0);
});

refs.myLibrary.addEventListener('click', onMyLibraryClick);
refs.homeLink.addEventListener('click', onHomeClick);
refs.homeLogo.addEventListener('click', onHomeClick);

refs.showWatchedBtn.addEventListener('click', e => {
  if (!refs.showWatchedBtn.classList.contains('header__button--active')) {
    refs.showWatchedBtn.classList.add('header__button--active');
    refs.showQueueBtn.classList.remove('header__button--active');
    // Серёга, добавляй свою функцию после этой строчки :)
  }
});
refs.showQueueBtn.addEventListener('click', e => {
  if (refs.showWatchedBtn.classList.contains('header__button--active')) {
    refs.showWatchedBtn.classList.remove('header__button--active');
    refs.showQueueBtn.classList.add('header__button--active');
    // Серёга, добавляй свою функцию после этой строчки :)
  }
});
