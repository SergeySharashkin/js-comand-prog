import { refs } from '../refs';
import { onLibraryBtnClick } from './onLibraryBtnClick';

refs.showWatchedBtn.addEventListener('click', () => {
  onLibraryBtnClick('watchedStorage');
  console.log('im here');
});

refs.showQueueBtn.addEventListener('click', () => {
  onLibraryBtnClick('savedStorage');
  console.log('im here');
});
