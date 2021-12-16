import { renderTrailerModal } from './renderTrailerModal';
import { refs } from '../refs';

export function onTrailerBtnClick(e) {
  refs.trailerBackdrop.classList.remove('visually-hidden');
  const filmUrl = e.currentTarget.dataset.trailer;
  renderTrailerModal(filmUrl);
}
