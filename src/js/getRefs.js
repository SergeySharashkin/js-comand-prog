export function getRefs() {
  return {
    container: document.querySelector('.film-list'),
    input: document.querySelector('.header__input'),
    form: document.querySelector('.header__form'),
    homeLink: document.querySelector('.header__home-link'),
    homeLogo: document.querySelector('.header__logo'),
    myLibrary: document.querySelector('.header__my-library-link'),
    watchedBtn: document.querySelector('.watched-btn'),
    queueBtn: document.querySelector('.queue-btn'),
  };
}
