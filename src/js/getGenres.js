import axios from 'axios';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { BASE_URL, RELEVANT_GENRES_LIST, KEY, LANGUAGE } from './constants';
import { selectedLanguage } from './MultiLanguage/languageState';
const { other } = selectedLanguage;
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
      arrOfGenres.push(other);
      return;
    }
    arrOfGenres.push(genre[0].name);
  });
  checkGenresListLength(arrOfGenres);
  return arrOfGenres.join(', ');
};

function genresForLibrary(genres) {
  const genresList = genres.map(({ name }) => name);
  checkGenresListLength(genresList);
  return genresList.join(', ');
}
function checkGenresListLength(genresList) {
  if (genresList.length >= 3) {
    genresList.splice(2, genresList.length - 2, other);
  }
  if (!genresList.length) {
    genresList.push(other);
  }
  return genresList;
}

export { getRelevantGenresIds, convertIdsToGenres, genresForLibrary };
