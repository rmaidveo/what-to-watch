import {combineReducers} from 'redux';
import {user} from './user/user';
import {films} from './films/films';

export const NameSpace = {
  FILMS: `FILMS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.USER]: user,
});
