import axios from 'axios';
const KEY = '6523fa24eefdcfaabad3a6688685bc24';
const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_FILM_FETCH = 'https://api.themoviedb.org/3/trending/movie/week';
const RELEVANT_GENRES_LIST = 'https://api.themoviedb.org/3/genre/movie/list';

export class RenderClass {
  constructor() {
    this.container = document.querySelector('.film-list');
    this.input = document.querySelector('.header__input');
    this.homeLink = document.querySelector('.header__home-link');
    this.homeLogo = document.querySelector('.header__logo');
    this.myLibrary = document.querySelector('.header__my-library-link');
    this.watchedBtn = document.querySelector('.watched-btn');
    this.queueBtn = document.querySelector('.queue-btn');
    this.input.addEventListener('header__input', this.renderFilmsByQuery);
    this.homeLink.addEventListener('click', e => {
      e.preventDefault();
      this.renderHomePage();
    });
    this.homeLogo.addEventListener('click', e => {
      e.preventDefault();
      this.renderHomePage();
    });
    this.relevantGenresList = [];
  }
  getRelevantGenresList = async () => {
    try {
      const res = await axios.get(`${RELEVANT_GENRES_LIST}?api_key=${KEY}`);
      const relevantGenresObj = await res.data;
      this.relevantGenresList = relevantGenresObj.genres;
      return this.relevantGenresList;
    } catch (error) {
      console.log(error.message);
    }
  };

  replaceIdsWithGenres = arrayOfIds => {
    let arrOfGenres = [];
    arrayOfIds.forEach(number => {
      const genre = this.relevantGenresList.filter(obj => obj.id === number);
      arrOfGenres.push(genre[0].name);
    });
    if (arrOfGenres.length >= 3) {
      arrOfGenres.splice(2, arrOfGenres.length - 2, 'Other');
    }
    return arrOfGenres.join(', ');
  };

  renderHomePage = async () => {
    try {
      const response = await axios.get(`${POPULAR_FILM_FETCH}?api_key=${KEY}`);
      const popularFilms = await response.data;
      const { results, total_pages } = popularFilms;
      this.renderFilmsMarkup(results);
    } catch (error) {
      console.log(error.message);
    }
  };
  renderFilmsMarkup = films => {
    const popularFilmsMarkup = films
      .map(({ original_title, poster_path, release_date, vote_average, genre_ids }) => {
        const data = new Date(release_date).getFullYear();
        return `   <li class="film-list__item list-item">
        <a class="list-item__link" href="">
        <div class="film-list__thumb">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" width="300px" loading="lazy"/>
      </div>
      <div class="film-list__content">
        <h3 class="film-list__item-title">${original_title}</h3>
        <p class="film-list__item-text">${this.replaceIdsWithGenres(
          genre_ids,
        )} &VerticalLine; ${data}</p>
      </div>
</a>

      </li>
`;
      })
      .join('');
    this.container.innerHTML = popularFilmsMarkup;
  };
}
