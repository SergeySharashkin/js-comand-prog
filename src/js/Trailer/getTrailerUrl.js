import axios from 'axios';
import Notiflix from 'notiflix';
import { BASE_URL, KEY, LANGUAGE } from '../constants';
import { refs } from '../refs';
import { onTrailerBtnClick } from './onTrailerBtnClick';
import { toggleModal } from './toggleModal';

export const getTrailerUrl = async id => {
  try {
    Notiflix.Loading.pulse({ svgColor: '#ff6b08' });
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${KEY}&language=${LANGUAGE}`,
    );
    const extendedInfo = await response.data;
    const { results } = extendedInfo;
    if (!results[0]) {
    Notiflix.Loading.remove();
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
      toggleModal(refs.trailerBackdrop);
      refs.trailerThumb.innerHTML = '';

    });
    Notiflix.Loading.remove();

  } catch (error) {
    console.log(error.message);
    Notiflix.Loading.remove();
  }
};
