import axios from 'axios';
import { BASE_URL, KEY, LANGUAGE } from '../constants';
import { refs } from '../refs';
import { onTrailerBtnClick } from './onTrailerBtnClick';
import { selectedLanguage } from '../MultiLanguage/languageState';
const { trailerBtn } = selectedLanguage;

export const getTrailerUrl = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${KEY}&language=${LANGUAGE}`,
    );
    const extendedInfo = await response.data;
    const { results } = extendedInfo;
    if (!results[0]) {
      return;
    }
    refs.posterImg = document.querySelector(`img[data-id="${id}"]`);
    refs.posterImg.setAttribute('data-trailer', `${results[0].key}`);
    const modalAddBtns = document.querySelector('.modal-add-btns');
    const openTrailerBtn = document.createElement('button');
    openTrailerBtn.setAttribute('data-trailer', `${results[0].key}`);
    openTrailerBtn.classList.add('add-btn', 'trailer-btn');

    openTrailerBtn.textContent = trailerBtn;
    modalAddBtns.prepend(openTrailerBtn);
    refs.openTrailerBtn = document.querySelector('.trailer-btn');
    refs.openTrailerBtn.addEventListener('click', onTrailerBtnClick);
    refs.closeTrailerBtn.addEventListener('click', () => {
      refs.trailerBackdrop.classList.add('visually-hidden');
      refs.trailerThumb.innerHTML = '';
    });
  } catch (error) {
    console.log(error.message);
  }
};
