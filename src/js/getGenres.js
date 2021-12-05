import axios from 'axios';
import { BASE_URL, RELEVANT_GENRES_LIST, KEY } from './constants';

let relevantGenresList = [];
const getRelevantGenresIds = async () => {
  try {
    const res = await axios.get(`${BASE_URL}${RELEVANT_GENRES_LIST}?api_key=${KEY}`);
    const relevantGenresObj = await res.data;
    relevantGenresList = relevantGenresObj.genres;
    console.log(relevantGenresList);
    return relevantGenresList;
  } catch (error) {
    console.log(error.message);
  }
};

const convertIdsToGenres = arrayOfIds => {
  let arrOfGenres = [];
  arrayOfIds.forEach(number => {
    const genre = relevantGenresList.filter(obj => obj.id === number);
    // genre[0].name ? arrOfGenres.push(genre[0].name) : arrOfGenres.push('Other');

    arrOfGenres.push(genre[0].name);
  });
  if (arrOfGenres.length >= 3) {
    arrOfGenres.splice(2, arrOfGenres.length - 2, 'Other');
  }
  // const arrOfUniqGenres = new Set(arrOfGenres);
  return arrOfGenres.join(', ');
};

export { getRelevantGenresIds, convertIdsToGenres };
