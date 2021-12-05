import { refs } from './refs';
// refModalLink.addEventListener('click', openModal);
let currentId = 0;
export function openModal(e) {
  // e.preventDefault()
  const modalName = refs.modalLink.getAttribute('data-info-modal');
  const modal = document.querySelector('.js-info-modal');
  const modalInfoWrapper = document.querySelector('.info-modal-wrapper');

  modal.classList.add('is-shown');
  refs.modalOverlay.classList.add('is-shown');
  const data = {
    popularity: e.target.dataset.popularity,
    url: e.target.dataset.url,
    title: e.target.alt,
    id: e.target.dataset.id,
    overview: e.target.dataset.overview,
    rating: e.target.dataset.rating,
    votes: e.target.dataset.count,
    originalTitle: e.target.dataset.originalTitle,
    genres: e.target.dataset.genres,
  };
  currentId = data.id;
  console.log(data.url);
  const infoModalContent = `     <div class="modal__card-img">
    <img src="${data.url}" alt="${data.title}" width="200px" class="modal__img" />
  </div>
  <div class="modal__table-wrap">
    <table class="modal__table">
      <tbody>
        <tr>
          <th colspan="2">${data.title}</th>
        </tr>
        <tr>
          <th>Vote / Votes</th>
          <td><span>${data.rating}</span>/ ${data.votes}</td>
        </tr>
        <tr>
          <th>Popularity</th>
          <td>${data.popularity}</td>
        </tr>
        <tr>
          <th>Original Title</th>
          <td>${data.originalTitle}</td>
        </tr>
        <tr>
          <th>${data.genres}</th>
          <td>${data.overview}</td>
        </tr>
      </tbody>
    </table>
  </div>

  `;
  modalInfoWrapper.innerHTML = infoModalContent;
}
refs.modalClose.addEventListener('click', function () {
  refs.modalClose.parentNode.classList.remove('is-shown');
  refs.modalOverlay.classList.remove('is-shown');
});

refs.modalOverlay.addEventListener('click', function () {
  refs.modalClose.parentNode.classList.remove('is-shown');
  refs.modalOverlay.classList.remove('is-shown');
});

function renderModal() {}

let sevedFilms = [];
let wachedFilms = [];
// let targetID = e.target.dataset.id;
refs.addWatched.addEventListener('click', e => {
  // const currentId = e.target.dataset.id;
  // console.log(currentId);
  if (!wachedFilms.includes(currentId)) {
    wachedFilms.push(currentId);
    return console.log('watched add', wachedFilms);;
  }
  const index = wachedFilms.indexOf(currentId);
  wachedFilms.splice(index, 1);
  return console.log('watched remove', wachedFilms);
});
refs.addQueue.addEventListener('click', e => {
  if (!sevedFilms.includes(currentId)) {
    sevedFilms.push(currentId);
    return console.log('seved add', sevedFilms);;
  }
  const index = sevedFilms.indexOf(currentId);
  sevedFilms.splice(index, 1);
  return console.log('seved remove', sevedFilms);
});

// function addInQueue(id) {
//   if (!sevedFilms.includes(id)) {
//     sevedFilms.push(id);
//     return;
//   }
//   index = sevedFilms.indexOf(id);
//   sevedFilms.splice(index, 1)
//   return
// }
// function addInWatched(id) {
//   if (!wachedFilms.includes(id)) {
//     return wachedFilms.push(id);
//   }
//   index = wachedFilms.indexOf(id);
//   wachedFilms.splice(index, 1)
//   return
// }
console.log('seved', sevedFilms);
console.log('watched', wachedFilms);
