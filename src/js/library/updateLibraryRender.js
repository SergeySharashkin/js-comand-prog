import { refs } from '../refs';
import { renderLibraryMarkup } from './renderLibraryMarkup';
import { getStorage } from '../openInfoModal';

export function updateLibraryRender(librarySectionBtn, libraryFilms) {
  if (
    refs.header.classList.contains('header--my-library') &&
    librarySectionBtn.classList.contains('header__button--active')
  ) {
    getStorage();
    renderLibraryMarkup(libraryFilms);
  }
}
