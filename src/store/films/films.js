import {createReducer} from '@reduxjs/toolkit';
import {GENERE_ALL, FILMS_COUNT} from '../../consts';
import {adapterFilms, adapterFilm} from '../../adapters/films';
import {loadFilmsList, changeGenre, loadFavoriteFilmsList, showMoreFilms, loadPromoFilm, setIsApplycationReady, loadComments, resetVisibleFilms} from '../actions';

const initialState = {
  isApplicationReady: false,
  genre: GENERE_ALL,
  visibleFilms: FILMS_COUNT,
  reviews: [],
  films: [],
  promo: {},
  favoriteFilmsList: [],
};

const films = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(showMoreFilms, (state) => {
    state.visibleFilms = state.visibleFilms + FILMS_COUNT;
  });
  builder.addCase(resetVisibleFilms, (state) => {
    state.visibleFilms = FILMS_COUNT;
  });
  builder.addCase(loadFilmsList, (state, action) => {
    const adaptedFilms = adapterFilms(action.payload);
    state.films = adaptedFilms;
  });
  builder.addCase(loadFavoriteFilmsList, (state, action) => {
    const adaptedFavoriteFilms = adapterFilms(action.payload);
    state.favoriteFilmsList = adaptedFavoriteFilms;
  });
  builder.addCase(loadPromoFilm, (state, action) => {
    const adaptedPromo = adapterFilm(action.payload);
    state.promo = adaptedPromo;
  });
  builder.addCase(loadComments, (state, action) => {
    state.reviews = action.payload;
  });
  builder.addCase(setIsApplycationReady, (state, action) => {
    state.isApplicationReady = action.payload;
  });
});

export {films};
