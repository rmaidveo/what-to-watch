import {GeneresCount, GENERE_ALL} from '../consts';

export const getSortByGenre = (state) => {
  if (state.genre === GENERE_ALL) {
    return state.films;
  }
  return state.films.filter((film) => film.genre === state.genre);
};

export const getGenresType = (state) => {
  const genresList = state.films.map((film) => film.genre).sort();
  return [GENERE_ALL, ...new Set(genresList)].slice(GeneresCount.MIN, GeneresCount.MAX);
};
