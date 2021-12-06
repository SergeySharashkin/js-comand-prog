import axios from 'axios';
import { BASE_URL, KEY, LANGUAGE } from '../constants';
import { refs } from '../refs';

export const getTrailerUrl = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${KEY}&language=${LANGUAGE}`,
    );
    const extendedInfo = await response.data;
    const { results } = extendedInfo;
    results[0]
      ? refs.openTrailerBtn.setAttribute('data-key', `${results[0].key}`)
      : refs.openTrailerBtn.classList.add('visually-hidden');
  } catch (error) {
    console.log(error.message);
  }
};
