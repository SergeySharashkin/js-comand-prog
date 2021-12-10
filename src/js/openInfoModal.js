import { getTrailerUrl } from './Trailer/getTrailerUrl';
import { refs } from './refs';
let currentId = 0;
let savedFilms = [];
let watchedFilms = [];
populateLib();

export function openInfoModal(e) {

  const modalName = refs.modalLink.getAttribute('data-info-modal');
  const modal = document.querySelector('.js-info-modal');
  const modalInfoWrapper = document.querySelector('.info-modal-wrapper');
  // const bodyHidden = document.querySelector('')
  modal.classList.add('is-shown');
  refs.modalOverlay.classList.add('is-shown');
  document.body.classList.add('body-hidden');

  const data = {
    popularity: e.target.dataset.popularity,
    url: e.target.dataset.url,
    title: e.target.alt,
    id: e.target.dataset.id,
    overview: e.target.dataset.overview,
    rating: e.target.dataset.rating,
    votes: e.target.dataset.count,
    original: e.target.dataset.original,
    genres: e.target.dataset.genres,
  };
  console.log(e.target.dataset.original);
  const { popularity, url, title, id, overview, rating, votes, original, genres } = data;
  currentId = data.id;
  console.log(data.url);
  const infoModalContent = `     <div class="modal__card-img">
    <img src="${url}" alt="${title}"  class="modal__img" />
  </div>
  <div class="modal__table-wrap">
     <h2 class="card-title">${title}</h2>
    <ul class="modal__list">

          <li class="modal__list-item">Vote / Votes<span class="modal__list-item_value">${rating}</span>/<span>${votes}</span></li>

          <li class="modal__list-item">Popularity<span class="modal__list-item_value">${popularity}</span></li>

          <li class="modal__list-item">Original Title<span class="modal__list-item_value original-title">${original}</span></li>

          <li class="modal__list-item">Genres<span class="modal__list-item_value">${genres}</span></li>

    </ul>
    <div class="about">
      <h3>About</h3>
      <p class="description-card">${overview}</p>

    </div>

  </div>

  `;
  modalInfoWrapper.innerHTML = infoModalContent;
  checkingButtonName();
  getTrailerUrl(id);
  refs.openTrailerBtn.setAttribute('data-id', id);
}

refs.modalClose.addEventListener('click', onModalClose);

refs.modalOverlay.addEventListener('click', onModalClose);


function onModalClose() {
  refs.modalClose.parentNode.classList.remove('is-shown');
  refs.modalOverlay.classList.remove('is-shown');
  document.body.classList.remove('body-hidden');
};


refs.watchedBtn.addEventListener('click', e => {
  if (!watchedFilms.includes(currentId)) {
    watchedFilms.push(currentId);
    localStorage.watchedStorage = JSON.stringify(watchedFilms);
    refs.watchedBtn.textContent = 'remove to watced'
    return console.log('watched add');
  }
  const index = watchedFilms.indexOf(currentId);
  watchedFilms.splice(index, 1);
  localStorage.watchedStorage = JSON.stringify(watchedFilms);
  refs.watchedBtn.textContent = 'add to watced'
  return console.log('watched remove');
});

refs.queueBtn.addEventListener('click', e => {
  if (!savedFilms.includes(currentId)) {
    savedFilms.push(currentId);
    localStorage.savedStorage = JSON.stringify(savedFilms);
    refs.queueBtn.textContent = 'remove to queue'
    return console.log('saved add');
  }
  const index = savedFilms.indexOf(currentId);
  savedFilms.splice(index, 1);
  localStorage.savedStorage = JSON.stringify(savedFilms);
  refs.queueBtn.textContent = 'add to queue';
  return console.log('saved remove');
});

function populateLib() {
  if (localStorage.watchedStorage) {
    watchedFilms = JSON.parse(localStorage.watchedStorage);
  }
  if (localStorage.savedStorage) {
    savedFilms = JSON.parse(localStorage.savedStorage);
  }

  return
}

function checkingButtonName() {
  if (savedFilms.includes(currentId)) {
    refs.queueBtn.textContent = 'remove to queue'
  }
  if (watchedFilms.includes(currentId)) {
    refs.watchedBtn.textContent = 'remove to watched'
  }
}
