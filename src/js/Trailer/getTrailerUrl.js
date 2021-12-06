import axios from 'axios';
import { BASE_URL, KEY, LANGUAGE } from '../constants';
import { renderTrailerModal } from '../renderTrailerModal';

export const getTrailerUrl = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${KEY}&language=${LANGUAGE}`,
    );
    const extendedInfo = await response.data;
    const { results } = extendedInfo;
    if (!results[0]) {
      if (!refs.openTrailerBtn.classList.contains('visually-hidden')) {
        refs.openTrailerBtn.classList.add('visually-hidden');
      }
      return;
    }
    if (refs.openTrailerBtn.classList.contains('visually-hidden')) {
      refs.openTrailerBtn.classList.remove('visually-hidden');
    }
    const partOfUrl = results[0].key;
    refs.openTrailerBtn.setAttribute('data-url', `${partOfUrl}`);
  } catch (error) {
    console.log(error.message);
  }
};
