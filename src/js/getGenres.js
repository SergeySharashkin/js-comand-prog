import axios from 'axios';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { BASE_URL, RELEVANT_GENRES_LIST, KEY, LANGUAGE } from './constants';

let relevantGenresList = [];
const getRelevantGenresIds = async () => {
  try {
    // Loading.pulse({ svgColor: '#ff6b08' });

    const res = await axios.get(
      `${BASE_URL}${RELEVANT_GENRES_LIST}?api_key=${KEY}&language=${LANGUAGE}`,
    );
    const relevantGenresObj = await res.data;
    relevantGenresList = relevantGenresObj.genres;
    // Loading.remove();
    return relevantGenresList;
  } catch (error) {
    console.log(error.message);
    // Loading.remove();
  }
};

const convertIdsToGenres = arrayOfIds => {
  let arrOfGenres = [];
  arrayOfIds.forEach(number => {
    const genre = relevantGenresList.filter(obj => obj.id === number);
    if (!genre[0]) {
      arrOfGenres.push('Другое');
      return;
    }
    arrOfGenres.push(genre[0].name);
  });
  if (arrOfGenres.length >= 3) {
    arrOfGenres.splice(2, arrOfGenres.length - 2, 'Другое');
  }
  return arrOfGenres.join(', ');
};

export { getRelevantGenresIds, convertIdsToGenres };
