import {GENERE_ALL} from '../consts';

export const getSortByGenre = (state) => {
  if (state.genre === GENERE_ALL) {
    return state.films;
  }
  return state.films.filter((film) => film.genre === state.genre);
};
