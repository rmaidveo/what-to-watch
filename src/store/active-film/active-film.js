import {createReducer} from '@reduxjs/toolkit';
import {loadFilmById} from '../actions';
import {adapterFilm} from '../../adapters/films';

const initialState = {
  activeFilm: {},
  activeFilmLoaded: false,
};
const activeFilm = createReducer(initialState, (builder) => {
  builder.addCase(loadFilmById, (state, action) => {
    const adaptedFilm = adapterFilm(action.payload);
    state.activeFilm = adaptedFilm;
    state.activeFilmLoaded = true;
  });
});
export {activeFilm};
