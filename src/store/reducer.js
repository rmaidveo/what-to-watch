import {ActionType} from './action';
import {GENERE_ALL} from '../consts';
import films from '../mocks/films';
import reviews from '../mocks/reviews';

const initialState = {
  genre: GENERE_ALL,
  films: films.films,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        films,
        reviews
      };
  }

  return state;
};


export {reducer};
