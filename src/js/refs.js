export const refs = {
  container: document.querySelector('.film-list'),
  input: document.querySelector('.header__input'),
  form: document.querySelector('.header__form'),

  myLibrary: document.querySelector('.header__my-library-link'),
  homeLink: document.querySelector('.header__home-link'),
  homeLogo: document.querySelector('.header__logo'),
 
  modalLink: document.querySelector('.js-info-modal-open'),
  modalClose: document.querySelector('.js-info-modal-close'),
  modalOverlay: document.querySelector('.js-info-modal-overlay'),

  watchedBtn: document.querySelector('#add-watched'),
  queueBtn: document.querySelector('#add-queue'),

  trailerBackdrop: document.querySelector('[data-trailer-modal]'),
  trailerModal: document.querySelector('.trailer-modal'),
  trailerThumb: document.querySelector('.trailer__thumb'),
  openTrailerBtn: document.querySelector('.trailer-btn'),
  closeTrailerBtn: document.querySelector('.close-trailer-btn'),

  headerBtnContainer: document.querySelector('.header__button-container'),
  header: document.querySelector('.header'),

  filmCardLink: null,
};
