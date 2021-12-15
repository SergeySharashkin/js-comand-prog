import axios from 'axios';
import { KEY, BASE_URL, LANGUAGE, SEARCH_BY_ID } from '../constants';

export function fetchById(id) {
  axios
    .get(`${BASE_URL}${SEARCH_BY_ID}${id}?api_key=${KEY}&language=${LANGUAGE}`)
    .then(response => response.data);
}
