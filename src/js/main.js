import './library/library';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getRelevantGenresIds } from './getGenres';
import { checkState } from './checkState';
import { fetchFilms, clearQueryString } from './fetchFilms';
import { refs } from './refs';
import { KEY, BASE_URL, POPULAR_FILM_FETCH, SEARCH__MOVIE, LANGUAGE } from './constants';
import { openInfoModal } from './openInfoModal';
import { onMyLibraryClick, onHomeClick } from './header';
import { onLibraryBtnClick } from './library/onLibraryBtnClick';
import { pagination } from './pagination';
import { renderFilmsMarkup } from './renderFilmsMarkup';
import { renderLibraryMarkup } from './library/renderLibraryMarkup';
import { selectedLanguage } from './MultiLanguage/languageState';
import { getSelectedLanguage } from './getSelectedLanguage';
import './Trailer/onTrailerBtnClick';
import './library/library';
import './toggle-theme';
const { notifies } = selectedLanguage;
import './about-us';

getRelevantGenresIds();
getSelectedLanguage();

async function onHomePageHandler(e) {
  e.preventDefault();
  clearQueryString();
  refs.form.reset();
  sessionStorage.clear();
  buildMarkup(await fetchFilms({ page: 1 }));
}

refs.homeLink.addEventListener('click', onHomePageHandler);
refs.homeLogo.addEventListener('click', onHomePageHandler);
// refs.languageSelect.addEventListener('change', location.reload());

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  sessionStorage.clear();
  let searchValue = e.target.elements.search.value.trim();
  if (!searchValue) {
    Notify.warning(notifies.emptySearch);
    return;
  }
  sessionStorage.setItem('query', searchValue);
  buildMarkup(await fetchFilms({ query: searchValue, type: SEARCH__MOVIE }));
});

// function modalIsOpen() {
//
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   const filmId = e.target.dataset.id;
//   openInfoModal(e);
// }



refs.container.addEventListener('click', e => {

  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const filmId = e.target.dataset.id;
  openInfoModal(e);

});

refs.container.removeEventListener('click', e => {

  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const filmId = e.target.dataset.id;
  openInfoModal(e);

})

refs.myLibrary.addEventListener('click', onMyLibraryClick);
refs.homeLink.addEventListener('click', onHomeClick);
refs.homeLogo.addEventListener('click', onHomeClick);

export function buildMarkup({ results, total_results, page }) {
  renderFilmsMarkup(results);
  pagination({ totalItems: total_results, page }, onClickPagePagination);
}

async function onClickPagePagination(eventData) {
  sessionStorage.setItem('mainPage', eventData.page);
  buildMarkup(await fetchFilms({ page: eventData.page }));
}

(async function () {
  await checkState();
})();
