import { renderTrailerModal } from './renderTrailerModal';
import { refs } from '../refs';
import { toggleModal } from './toggleModal';

refs.openTrailerBtn.addEventListener('click', onTrailerBtnClick);
function onTrailerBtnClick(e) {
  toggleModal(refs.trailerBackdrop);
  const filmUrl = e.currentTarget.dataset.url;
  console.log(filmUrl);
  // getTrailerUrl(filmId);
  renderTrailerModal(filmUrl);
}
refs.closeTrailerBtn.addEventListener('click', () => {
  toggleModal(refs.trailerBackdrop);
});
