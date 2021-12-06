import { getTrailerUrl } from './Trailer/getTrailerUrl';
import { refs } from './refs';

export function openInfoModal(e) {
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
  const { popularity, url, title, id, overview, rating, votes, originalTitle, genres } = data;
  const infoModalContent = `     <div class="modal__card-img">
    <img src="${url}" alt="${title}" width="200px" class="modal__img" />
  </div>
  <div class="modal__table-wrap">
    <table class="modal__table">
      <tbody>
        <tr>
          <th colspan="2">${title}</th>
        </tr>
        <tr>
          <th>Vote / Votes</th>
          <td><span>${rating}</span>/ ${votes}</td>
        </tr>
        <tr>
          <th>Popularity</th>
          <td>${popularity}</td>
        </tr>
        <tr>
          <th>Original Title</th>
          <td>${originalTitle}</td>
        </tr>
        <tr>
        
          <th>${genres}</th>
          <td>${overview}</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  `;
  modalInfoWrapper.innerHTML = infoModalContent;
  getTrailerUrl(id);
  // refs.openTrailerBtn.setAttribute('data-id', id);
}
refs.modalClose.addEventListener('click', function () {
  refs.modalClose.parentNode.classList.remove('is-shown');
  refs.modalOverlay.classList.remove('is-shown');
});

refs.modalOverlay.addEventListener('click', function () {
  refs.modalClose.parentNode.classList.remove('is-shown');
  refs.modalOverlay.classList.remove('is-shown');
});
