import { refs } from '../refs';
import { onLibraryBtnClick } from './onLibraryBtnClick';
import { pagination } from '../pagination';

refs.myLibrary.addEventListener('click', () => {
  onLibraryBtnClick('watchedStorage');
});

refs.showWatchedBtn.addEventListener('click', () => {
  onLibraryBtnClick('watchedStorage');
});

refs.showQueueBtn.addEventListener('click', () => {
  onLibraryBtnClick('savedStorage');
});
