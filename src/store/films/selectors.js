import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {GENERE_ALL, GeneresCount, FILMS_COUNT_FILM_PAGE} from '../../consts';

export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getVisibleFilms = (state) => state[NameSpace.FILMS].visibleFilms;
export const getPromo = (state) => state[NameSpace.FILMS].promo;
export const getFavoriteFilms = (state) => state[NameSpace.FILMS].favoriteFilmsList;
export const getApplycationStatus = (state) => state[NameSpace.FILMS].isApplicationReady;
export const getLoadedFavoriteDataStatus = (state) => state[NameSpace.FILMS].isFavoriteDataLoaded;
export const getGenre = (state) => state[NameSpace.FILMS].genre;
export const getReviewsList = (state) => state[NameSpace.FILMS].reviews;

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
export const getIsFavoritePromoInList = createSelector(
    [getFavoriteFilms, getPromo],
    (films, promo) => {
      return films.some((film) => film.id === promo.id);
    });

export const getActiveFilm = (state, filmId) => {
  const films = getFilms(state);
  if (filmId <= films.length) {
    return films.find((film) => film.id === filmId);
  }
  return null;
};

export const getFilmsInFilmPage = (activeFilm) => createSelector(
    getFilms,
    (films) => films.filter((sortFilm) => (sortFilm.genre === activeFilm.genre && sortFilm.id !== activeFilm.id)).slice(0, FILMS_COUNT_FILM_PAGE)
);

export const getFavoriteStatusById = (id) => createSelector(
    getFavoriteFilms,
    (favorites) => favorites.some((item) => item.id === id)
);
