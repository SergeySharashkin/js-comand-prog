import { renderLibraryMarkup } from './renderLibraryMarkup';
import { getStorageItems, inLibraryFilms } from './getStorageItems';

export function onLibraryBtnClick(librarySection) {
  getStorageItems(librarySection);
  renderLibraryMarkup(inLibraryFilms);
}
