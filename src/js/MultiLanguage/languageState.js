import { LANGUAGE } from '../constants';

const languages = [
  {
    language: 'en',
    home: 'Home',
    library: 'My library',
    placeholder: 'Search films',
    langTitle: 'Title',
    langOriginal: 'Original title',
    langPopularity: 'Popularity',
    langGenres: 'Genres',
    langVote: 'Vote / Votes',
    langAbout: 'About',
    other: 'Other',
    notifies: {
      invalidSearch: 'Search result not successful. Enter the correct movie name',
      emptySearch: 'Query string cannot be empty',
      emptyWatchedLib: 'There are no films in "Watched" yet',
      emptyQueueLib: 'There are no films in "Queue" yet',
      addedToWatched: 'Added to "Watched"',
      addedToQueue: 'Added to "Queue"',
      removedFromWatched: 'Removed from "Watched"',
      removedFromQueue: 'Removed from "Queue"',
    },
    watchedBtnState: {
      active: 'add to watched',
      reverse: 'pull out watched',
    },
    queueBtnState: {
      active: 'add to queue',
      reverse: 'remove from queue',
    },
    trailerBtn: 'Trailer',
    watched: 'Watched',
    queue: 'Queue',
  },
  {
    language: 'ru',
    home: 'На главную',
    library: 'Моя библиотека',
    placeholder: 'Поиск фильмов',
    langTitle: 'Название',
    langOriginal: 'Оринигальное название',
    langPopularity: 'Популярность',
    langGenres: 'Жанры',
    langVote: 'Оценка / Голосов',
    langAbout: 'Сюжет',
    other: 'Другое',
    notifies: {
      invalidSearch: 'Ничего не найдено по Вашему запросу',
      emptySearch: 'Поиск по пустой строке невозможен',
      emptyWatchedLib: 'Вы еще не добавили фильмы в "Просмотренные"',
      emptyQueueLib: 'Вы еще не добавили фильмы в "Очередь"',
      addedToWatched: 'Фильм добавлен в "Просмотренные"',
      addedToQueue: 'Фильм добавлен в "Очередь"',
      removedFromWatched: 'Фильм удален из "Просмотренных"',
      removedFromQueue: 'Фильм удален из "Очереди"',
    },
    watchedBtnState: {
      active: 'В просмотренные',
      reverse: 'Из просмотренных',
    },
    queueBtnState: {
      active: 'В очередь',
      reverse: 'Из очереди',
    },
    trailerBtn: 'Трейлер',
    watched: 'Просмотренные',
    queue: 'В очереди',
  },
  {
    language: 'uk',
    home: 'На головну',
    library: 'Моя біблиотека',
    placeholder: 'Пошук фільмів',
    langTitle: 'Назва',
    langOriginal: 'Оринигільна назва',
    langPopularity: 'Популярність',
    langGenres: 'Жанри',
    langVote: 'Оцінка / Голосів',
    langAbout: 'Сюжет',
    other: 'Інше',
    notifies: {
      invalidSearch: 'За Вашим запитом нічого не знайдено',
      emptySearch: 'Рядок пошуку не може бути порожнім',
      emptyWatchedLib: 'Ви ще не додали фільми до "Переглянутих"',
      emptyQueueLib: 'Ви ще не додали фільми до "Черги"',
      addedToWatched: 'Фільм додано до "Переглянутих"',
      addedToQueue: 'Фільм додано до "Черги"',
      removedFromWatched: 'Фільм видалено з "Переглянутих"',
      removedFromQueue: 'Фільм видалено з "Черги"',
    },
    watchedBtnState: {
      active: 'До переглянутих',
      reverse: 'З переглянутих',
    },
    queueBtnState: {
      active: 'До черги',
      reverse: 'З черги',
    },
    trailerBtn: 'Трейлер',
    watched: 'Переглянуті',
    queue: 'У черзі',
  },
];

export let selectedLanguage = languages.find(language => language.language === LANGUAGE);