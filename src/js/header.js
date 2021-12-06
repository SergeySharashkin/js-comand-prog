// const header = document.querySelector(header);
// const homeLink = document.querySelector('.header__home-link');
// const myLibrary = document.querySelector('.header__my-library-link');
// const form = document.querySelector('.header__form');
// const headerBtnContainer = document.querySelector('.header__button-container');
// const watchedBtn = document.querySelectorAll('.header__button')[0];
// const queueBtn = document.querySelectorAll('.header__button')[1];

function onMyLibraryClick() {
  if (!header.classList.contains('header--my-library')) {
    refs.header.classList.add('header--my-library');
    refs.homeLink.classList.remove('header__link--active');
    refs.myLibrary.classList.add('header__link--active');
    refs.form.classList.add('header__form--my-library');
    refs.headerBtnContainer.classList.add('header__button-container--my-library');
  }
}

function onHomeClick() {
  if (header.classList.contains('header--my-library')) {
    refs.header.classList.remove('header--my-library');
    refs.homeLink.classList.add('header__link--active');
    refs.myLibrary.classList.remove('header__link--active');
    refs.form.classList.remove('header__form--my-library');
    refs.headerBtnContainer.classList.remove('header__button-container--my-library');
  }
}

export { onMyLibraryClick, onHomeClick }
