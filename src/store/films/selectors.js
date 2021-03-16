import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';

import {GENERE_ALL, GeneresCount} from '../../consts';

export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getVisibleFilms = (state) => state[NameSpace.FILMS].visibleFilms;
export const getPromo = (state) => state[NameSpace.FILMS].promo;
export const getFavoriteFilms = (state) => state[NameSpace.FILMS].isFavoriteFilmsList;
export const getLoadedDataStatus = (state) => state[NameSpace.FILMS].isDataLoaded;
export const getLoadedFavoriteDataStatus = (state) => state[NameSpace.FILMS].isFavoriteDataLoaded;
export const getGenre = (state) => state[NameSpace.FILMS].genre;

export const getSortByGenre = (state) => {
  if (state[NameSpace.FILMS].genre === GENERE_ALL) {
    return state[NameSpace.FILMS].films;
  }
  return state[NameSpace.FILMS].films.filter((film) => film.genre === state[NameSpace.FILMS].genre);
};

export const getGenresType = (state) => {
  const genresList = state[NameSpace.FILMS].films.map((film) => film.genre).sort();
  return [GENERE_ALL, ...new Set(genresList)].slice(GeneresCount.MIN, GeneresCount.MAX);
};


export const getFilmsOfSameGenre = (state) => {
  return state[NameSpace.FILMS].films.filter((sortFilm) => (sortFilm.genre === state[NameSpace.ACTIVE_FILM].activeFilm.genre && sortFilm.id !== state[NameSpace.ACTIVE_FILM].activeFilm.id)).slice(0, 4);
};
export const getFilmsWithGenre = createSelector(
    getSortByGenre,
    (genre) => getSortByGenre(genre)
);
