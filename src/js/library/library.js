import { refs } from '../refs';
import { onLibraryBtnClick } from './onLibraryBtnClick';
import { pagination } from '../pagination';
import { selectedLanguage } from '../MultiLanguage/languageState';
const { watched, queue } = selectedLanguage;

refs.showWatchedBtn.textContent = watched;
refs.showQueueBtn.textContent = queue;

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
