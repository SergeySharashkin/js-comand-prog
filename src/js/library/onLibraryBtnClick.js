import { renderLibraryMarkup } from './renderLibraryMarkup';
import { getByPage, getStorageItems, inLibraryFilms } from './getStorageItems';
import {pagination} from '../pagination';

export function onLibraryBtnClick(librarySection) {
    getStorageItems(librarySection);
    buildPagination();
}

export function onPaginationClick({page}) {
  localStorage.setItem('library', page);
  buildPagination();
}

export function buildPagination() {
  const page = localStorage.getItem('library') || 1;
  renderLibraryMarkup(getByPage(page));
  pagination({totalItems: inLibraryFilms.length, page}, onPaginationClick);
}


