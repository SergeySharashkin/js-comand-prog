import { Notify } from 'notiflix';
import { refs } from '../refs';
import { onLibraryBtnClick } from './onLibraryBtnClick';
import { pagination } from '../pagination';
import { selectedLanguage } from '../MultiLanguage/languageState';
const {
  watched,
  queue,
  notifies: { emptyWatchedLib, emptyQueueLib },
} = selectedLanguage;

refs.showWatchedBtn.textContent = watched;
refs.showQueueBtn.textContent = queue;

refs.myLibrary.addEventListener('click', () => {
  onLibraryBtnClick('watchedStorage');
  saveSessionState('watchedPage');
});

refs.showWatchedBtn.addEventListener('click', () => {
  showLib(refs.showQueueBtn, refs.showWatchedBtn);
  onLibraryBtnClick('watchedStorage');
  saveSessionState('watchedPage');
});

refs.showQueueBtn.addEventListener('click', () => {
  showLib(refs.showWatchedBtn, refs.showQueueBtn);
  onLibraryBtnClick('savedStorage');
  saveSessionState('savedPage');
});

export function showLib(active, reverse) {
  if (active.classList.contains('header__button--active')) {
    active.classList.remove('header__button--active');
    reverse.classList.add('header__button--active');
  }
}

function saveSessionState(state) {
  sessionStorage.clear();
  sessionStorage.setItem(state, '1');
}

function emptyLibNotify(notify) {
  if (!refs.container.innerHTML) {
    Notify.info(notify);
  }
}
