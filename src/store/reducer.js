import {ActionType} from './actions';
import {GENERE_ALL, AuthorizationStatus} from '../consts';
import {adapterFilms, adapterFilm} from '../adapters/films';

const initialState = {
  genre: GENERE_ALL,
  films: [],
  promo: {},
  reviews: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.LOAD_FILMS_LIST:
      const adaptedFilms = adapterFilms(action.payload);
      return {
        ...state,
        films: adaptedFilms,
        isDataLoaded: true
      };
    case ActionType.LOAD_PROMO_FILM:
      const adaptedPromo = adapterFilm(action.payload);
      return {
        ...state,
        promo: adaptedPromo
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
  }

  return state;
};


export {reducer};
