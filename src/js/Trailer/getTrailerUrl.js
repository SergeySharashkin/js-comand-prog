import axios from 'axios';
import { BASE_URL, KEY, LANGUAGE } from '../constants';
// import { renderTrailerModal } from './renderTrailerModal';
import { refs } from '../refs';

export const getTrailerUrl = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${KEY}&language=${LANGUAGE}`,
    );
    const extendedInfo = await response.data;
    const { results } = extendedInfo;
    const partOfUrl = results[0].key;
    partOfUrl
      ? refs.openTrailerBtn.setAttribute('data-url', `${partOfUrl}`)
      : refs.openTrailerBtn.classList.add('visually-hidden');
    // renderTrailerModal(partOfUrl);
  } catch (error) {
    console.log(error.message);
  }
};
