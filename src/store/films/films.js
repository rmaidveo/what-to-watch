import {createReducer} from '@reduxjs/toolkit';
import {GENERE_ALL, FILMS_COUNT} from '../../consts';
import {adapterFilms, adapterFilm} from '../../adapters/films';
import {loadFilmsList, changeGenre, loadFavoriteFilmsList, showMoreFilms, loadPromoFilm} from '../actions';

const initialState = {
  genre: GENERE_ALL,
  visibleFilms: FILMS_COUNT,
  genresList: [],
  films: [],
  promo: {},
  isDataLoaded: false,
  isFavoriteFilmsList: [],
  isFavoriteDataLoaded: false,
};

const films = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(showMoreFilms, (state) => {
    state.visibleFilms = state.visibleFilms + FILMS_COUNT;
  });
  builder.addCase(loadFilmsList, (state, action) => {
    const adaptedFilms = adapterFilms(action.payload);
    state.films = adaptedFilms;
    state.isDataLoaded = true;
  });
  builder.addCase(loadFavoriteFilmsList, (state, action) => {
    const adaptedFavoriteFilms = adapterFilms(action.payload);
    state.isFavoriteFilmsList = adaptedFavoriteFilms;
    state.isFavoriteDataLoaded = true;
  });
  builder.addCase(loadPromoFilm, (state, action) => {
    const adaptedPromo = adapterFilm(action.payload);
    state.promo = adaptedPromo;
    state.isPromoLoaded = true;
  });
});

export {films};
