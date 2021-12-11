import { renderTrailerModal } from './renderTrailerModal';
import { refs } from '../refs';
import { toggleModal } from './toggleModal';

export function onTrailerBtnClick(e) {
  toggleModal(refs.trailerBackdrop);
  const filmUrl = e.currentTarget.dataset.trailer;
  console.log('trailer url', filmUrl);
  renderTrailerModal(filmUrl);
}

refs.closeTrailerBtn.addEventListener('click', () => {
  toggleModal(refs.trailerBackdrop);
  refs.trailerThumb.innerHTML = '';
});
