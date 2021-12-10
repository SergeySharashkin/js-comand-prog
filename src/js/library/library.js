import { refs } from '../refs';
import { onLibraryBtnClick } from './onLibraryBtnClick';

refs.myLibrary.addEventListener('click', () => {
  onLibraryBtnClick('watchedStorage');
});

refs.showWatchedBtn.addEventListener('click', () => {
  onLibraryBtnClick('watchedStorage');
});

refs.showQueueBtn.addEventListener('click', () => {
  onLibraryBtnClick('savedStorage');
});
