import {combineReducers} from 'redux';
import {user} from './user/user';
import {reviews} from './reviews/reviews';
import {films} from './films/films';
import {activeFilm} from './active-film/active-film';

export const NameSpace = {
  FILMS: `FILMS`,
  REVIEWS: `REVIEWS`,
  USER: `USER`,
  ACTIVE_FILM: `ACTIVE_FILM`
};

export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.USER]: user,
  [NameSpace.ACTIVE_FILM]: activeFilm,
});
