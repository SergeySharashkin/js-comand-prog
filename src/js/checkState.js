import { refs } from './refs';
import { buildMarkup } from './main';
import { onLibraryBtnClick } from './library/onLibraryBtnClick';
import { onMyLibraryClick } from './header';
import { fetchFilms } from './fetchFilms';
import { showLib } from './library/library';
import { SEARCH__MOVIE } from './constants';

export async function checkState() {
  if (!sessionStorage.length || Object.keys(sessionStorage)[0] === 'mainPage') {
    let page = Number(sessionStorage.getItem('mainPage')) || 1;
    buildMarkup(await fetchFilms({ page }));
    return;
  }
  if (Object.keys(sessionStorage)[0] === 'watchedPage') {
    onLibraryBtnClick('watchedStorage');
    onMyLibraryClick();
    return;
  }
  if (Object.keys(sessionStorage)[0] === 'savedPage') {
    onMyLibraryClick();
    showLib(refs.showWatchedBtn, refs.showQueueBtn);
    onLibraryBtnClick('savedStorage');
    return;
  }
  if (Object.keys(sessionStorage)[0] === 'query') {
    const searchValue = sessionStorage.query;
    buildMarkup(await fetchFilms({ query: searchValue, type: SEARCH__MOVIE }));
  }
}
