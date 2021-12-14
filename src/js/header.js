import { refs } from './refs';
import { selectedLanguage } from './MultiLanguage/languageState';
const { home, library, placeholder } = selectedLanguage;

refs.input.placeholder = placeholder;
refs.homeLink.textContent = home;
refs.myLibrary.textContent = library;

function onMyLibraryClick() {
  if (!refs.header.classList.contains('header--my-library')) {
    refs.header.classList.add('header--my-library');
    refs.homeLink.classList.remove('header__link--active');
    refs.myLibrary.classList.add('header__link--active');
    refs.form.classList.add('header__form--my-library');
    refs.headerBtnContainer.classList.add('header__button-container--my-library');
  }
  refs.showWatchedBtn.classList.add('header__button--active');
  refs.showQueueBtn.classList.remove('header__button--active');
}

function onHomeClick() {
  if (refs.header.classList.contains('header--my-library')) {
    refs.header.classList.remove('header--my-library');
    refs.homeLink.classList.add('header__link--active');
    refs.myLibrary.classList.remove('header__link--active');
    refs.form.classList.remove('header__form--my-library');
    refs.headerBtnContainer.classList.remove('header__button-container--my-library');
  }
}

export { onMyLibraryClick, onHomeClick };
