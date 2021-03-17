import {NameSpace} from '../root-reducer';

export const getActiveFilm = (state) => state[NameSpace.ACTIVE_FILM].activeFilm;
export const getActiveFilmLoaded = (state) => state[NameSpace.ACTIVE_FILM].activeFilmLoaded;
