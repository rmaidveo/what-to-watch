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
  activeFilm: {},
  activeFilmLoaded: false,
  commentsOnActiveFilm: [],
  sendingComment: {},
  isReviewFormDisabled: false,
  isFavoriteFilmsList: [],
  isFavoriteDataLoaded: false,
  isLoginError: false,
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
    case ActionType.LOAD_FAVORITE_FILMS_LIST:
      const adaptedFavoriteFilms = adapterFilms(action.payload);
      return {
        ...state,
        isFavoriteFilmsList: adaptedFavoriteFilms,
        isFavoriteDataLoaded: true
      };
    case ActionType.LOAD_PROMO_FILM:
      const adaptedPromo = adapterFilm(action.payload);
      return {
        ...state,
        promo: adaptedPromo,
        isPromoLoaded: true
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
    case ActionType.LOAD_FILM_BY_ID:
      const adaptedFilm = adapterFilm(action.payload);
      return {
        ...state,
        activeFilm: adaptedFilm,
        activeFilmLoaded: true
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        commentsOnActiveFilm: action.payload,
      };
    case ActionType.POST_COMMENT:
      return {
        ...state,
        sendingComment: action.payload,
      };
    case ActionType.SET_REVIEW_FORM_DISABLED:
      return {
        ...state,
        isReviewFormDisabled: action.payload
      };
    case ActionType.AUTHORIZATION_ERROR:
      return {
        ...state,
        isLoginError: action.payload
      };
  }

  return state;
};


export {reducer};
