import { refs } from '../refs';
import { onLibraryBtnClick } from './onLibraryBtnClick';
import { pagination } from '../pagination';

refs.myLibrary.addEventListener('click', () => {
  onLibraryBtnClick('watchedStorage');
  sessionStorage.clear();
  sessionStorage.setItem('watchedPage', '1');
});

refs.showWatchedBtn.addEventListener('click', () => {
  onLibraryBtnClick('watchedStorage');
  sessionStorage.clear();
  sessionStorage.setItem('watchedPage', '1');
});

refs.showQueueBtn.addEventListener('click', () => {
  onLibraryBtnClick('savedStorage');
  sessionStorage.clear();
  sessionStorage.setItem('savedPage', '1');
});
