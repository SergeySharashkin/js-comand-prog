import axios from 'axios';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { BASE_URL, KEY, LANGUAGE } from '../constants';
import { refs } from '../refs';
import { onTrailerBtnClick } from './onTrailerBtnClick';

export const getTrailerUrl = async id => {
  try {
    // Loading.pulse({ svgColor: '#ff6b08' });
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${KEY}&language=${LANGUAGE}`,
    );
    const extendedInfo = await response.data;
    const { results } = extendedInfo;
    if (!results[0]) {
    // Loading.remove();
      return;
    }
    refs.posterImg = document.querySelector(`img[data-id="${id}"]`);
    refs.posterImg.setAttribute('data-trailer', `${results[0].key}`);
    const modalAddBtns = document.querySelector('.modal-add-btns');
    const openTrailerBtn = document.createElement('button');
    openTrailerBtn.setAttribute('data-trailer', `${results[0].key}`);
    openTrailerBtn.classList.add('add-btn', 'trailer-btn');

    openTrailerBtn.textContent = 'Trailer';
    modalAddBtns.prepend(openTrailerBtn);
    refs.openTrailerBtn = document.querySelector('.trailer-btn');
    refs.openTrailerBtn.addEventListener('click', onTrailerBtnClick);
    refs.closeTrailerBtn.addEventListener('click', () => {
      refs.trailerBackdrop.classList.add('visually-hidden');
      refs.trailerThumb.innerHTML = '';

    });
    // Loading.remove();

  } catch (error) {
    console.log(error.message);
    // Loading.remove();
  }
};
