export const refs = {
  container: document.querySelector('.film-list'),
  input: document.querySelector('.header__input'),
  form: document.querySelector('.header__form'),

  myLibrary: document.querySelector('.header__my-library-link'),
  homeLink: document.querySelector('.header__home-link'),
  homeLogo: document.querySelector('.header__logo'),

  modalLink: document.querySelector('.js-info-modal-open'),
  modal: document.querySelector('.js-info-modal'),
  modalInfoWrapper: document.querySelector('.info-modal-wrapper'),
  modalClose: document.querySelector('.js-info-modal-close'),
  modalOverlay: document.querySelector('.js-info-modal-overlay'),

  watchedBtn: null,
  queueBtn: null,
  openTrailerBtn: null,
  posterImg: null,
  trailerBackdrop: document.querySelector('[data-trailer-modal]'),
  trailerModal: document.querySelector('.trailer-modal'),
  trailerThumb: document.querySelector('.trailer__thumb'),
  closeTrailerBtn: document.querySelector('.close-trailer-btn'),

  headerBtnContainer: document.querySelector('.header__button-container'),
  header: document.querySelector('.header'),
  showWatchedBtn: document.querySelector('.show-watched-btn'),
  showQueueBtn: document.querySelector('.show-queue-btn'),

  //pagination container
  tuiContainer: document.getElementById('tui-pagination-container'),

  filmCardLink: null,
  languageSelect: document.querySelector('.language-select'),
};
