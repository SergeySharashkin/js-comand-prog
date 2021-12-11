import { getTrailerUrl } from './Trailer/getTrailerUrl';
import { refs } from './refs';
// import { onTrailerBtnClick } from './Trailer/onTrailerBtnClick';
import { btnState } from './btnState';
const { queueBtnState, watchedBtnState } = btnState;
let currentId = 0;
let currentData = {};
let savedFilms = [];
let watchedFilms = [];

export function openInfoModal(e) {
  refs.modal.classList.add('is-shown');
  refs.modalOverlay.classList.add('is-shown');
  document.body.classList.add('body-hidden');

  getTrailerUrl(e.target.dataset.id);
  const data = {
    popularity: e.target.dataset.popularity,
    url: e.target.dataset.url,
    alt: e.target.alt,
    id: e.target.dataset.id,
    overview: e.target.dataset.overview,
    rating: e.target.dataset.rating,
    count: e.target.dataset.count,
    original: e.target.dataset.original,
    genres: e.target.dataset.genres,
    date: e.target.dataset.date,
  };
  // console.log('e.target.dataset', e.target.dataset);
  const { popularity, url, alt, id, overview, rating, count, original, genres, date } = data;
  currentId = id;
  let watchedBtnTextContent = watchedBtnState.active;
  if (localStorage.getItem('watchedStorage')) {
    let watchedJson = localStorage.getItem('watchedStorage');
    watchedFilms = JSON.parse(watchedJson);
    watchedFilms.find(film => film.id === currentId)
      ? (watchedBtnTextContent = watchedBtnState.reverse)
      : (watchedBtnTextContent = watchedBtnState.active);
  }
  let queueBtnTextContent = queueBtnState.active;
  if (localStorage.getItem('savedStorage')) {
    let savedJson = localStorage.getItem('savedStorage');
    savedFilms = JSON.parse(savedJson).find(film => film.id === currentId)
      ? (queueBtnTextContent = queueBtnState.reverse)
      : (queueBtnTextContent = queueBtnState.active);
  }
  currentData = data;
  console.log('currentData', currentData);
  const infoModalContent = `     <div class="modal__card-img">
    <img src="${url}" alt="${alt}" class="modal__img" />
  </div>
  <div class="modal__table-wrap">
     <h2 class="card-title">${alt}</h2>
    <ul class="modal__list">

          <li class="modal__list-item">Vote / Votes<span class="modal__list-item_value">${rating}</span>/<span>${count}</span></li>

          <li class="modal__list-item">Popularity<span class="modal__list-item_value">${popularity}</span></li>

          <li class="modal__list-item">Original Title<span class="modal__list-item_value original-title">${original}</span></li>

          <li class="modal__list-item">Genres<span class="modal__list-item_value">${genres}</span></li>

    </ul>
    <div class="about">
      <h3>About</h3>
      <p class="description-card">${overview}</p>
    </div>
    <div class="modal-add-btns">
    <button class="add-btn watched-btn" id="add-watched">${watchedBtnTextContent}</button>
    <button class="add-btn queue-btn" id="add-queue">${queueBtnTextContent}</button>
    </div>

  </div>

  `;
  refs.modalInfoWrapper.innerHTML = infoModalContent;
  const watchedBtn = document.querySelector('#add-watched');
  const queueBtn = document.querySelector('#add-queue');

  watchedBtn.addEventListener('click', () => {
    getStorageItems();
    const FilmsID = watchedFilms.map(film => film.id);
    if (!FilmsID.includes(currentId)) {
      watchedFilms.push(currentData);
      localStorage.setItem('watchedStorage', JSON.stringify(watchedFilms));
      watchedBtn.textContent = watchedBtnState.reverse;
      return;
    }
    const filterFilms = watchedFilms.filter(film => film.id !== currentId);
    localStorage.setItem('watchedStorage', JSON.stringify(filterFilms));
    watchedBtn.textContent = watchedBtnState.active;
  });

  queueBtn.addEventListener('click', () => {
    getStorageItems();
    const FilmsID = savedFilms.map(film => film.id);
    if (!FilmsID.includes(currentId)) {
      savedFilms.push(currentData);
      localStorage.setItem('savedStorage', JSON.stringify(savedFilms));
      console.log('savedFilms', savedFilms);
      queueBtn.textContent = queueBtnState.reverse;
      return;
    }
    const filterFilms = savedFilms.filter(film => film.id !== currentId);
    localStorage.setItem('savedStorage', JSON.stringify(filterFilms));
    queueBtn.textContent = queueBtnState.active;
  });
}
refs.modalClose.addEventListener('click', onModalClose);
refs.modalOverlay.addEventListener('click', onModalClose);

function onModalClose() {
  refs.modalClose.parentNode.classList.remove('is-shown');
  refs.modalOverlay.classList.remove('is-shown');
  document.body.classList.remove('body-hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    onModalClose();
  }
});

function populateLib() {
  if (localStorage.watchedStorage) {
    watchedFilms = JSON.parse(localStorage.watchedStorage);
  }
  if (localStorage.savedStorage) {
    savedFilms = JSON.parse(localStorage.savedStorage);
  }

  return;
}

function getStorageItems() {
  if (localStorage.getItem('watchedStorage')) {
    const watchedJson = localStorage.getItem('watchedStorage');
    watchedFilms = JSON.parse(watchedJson);
  }
  if (localStorage.getItem('savedStorage')) {
    const savedJson = localStorage.getItem('savedStorage');
    savedFilms = JSON.parse(savedJson);
  }
}
