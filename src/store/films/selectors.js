import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {GENERE_ALL, GeneresCount, FILMS_COUNT_FILM_PAGE} from '../../consts';
import {getActiveFilm} from '../active-film/selectors';

export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getVisibleFilms = (state) => state[NameSpace.FILMS].visibleFilms;
export const getPromo = (state) => state[NameSpace.FILMS].promo;
export const getFavoriteFilms = (state) => state[NameSpace.FILMS].isFavoriteFilmsList;
export const getLoadedDataStatus = (state) => state[NameSpace.FILMS].isDataLoaded;
export const getLoadedFavoriteDataStatus = (state) => state[NameSpace.FILMS].isFavoriteDataLoaded;
export const getGenre = (state) => state[NameSpace.FILMS].genre;

export const getSortByGenre = createSelector(
    [getFilms, getGenre],
    (films, genre) => {
      if (genre === GENERE_ALL) {
        return films;
      }
      return films.filter((film) => film.genre === genre);
    });

export const getGenresType = (state) => {
  const genresList = state[NameSpace.FILMS].films.map((film) => film.genre).sort();
  return [GENERE_ALL, ...new Set(genresList)].slice(GeneresCount.MIN, GeneresCount.MAX);
};

export const getFilmsOfSameGenre = createSelector(
    [getFilms, getActiveFilm],
    (films, activeFilm) => {
      return films.filter((sortFilm) => (sortFilm.genre === activeFilm.genre && sortFilm.id !== activeFilm.id)).slice(0, FILMS_COUNT_FILM_PAGE);
    });
