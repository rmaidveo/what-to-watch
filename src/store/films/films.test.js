import {ActionType} from '../actions';
import {initialState, films} from './films';
import {createAPI} from '../../services/api';
import {APIRoute, GENERE_ALL, FILMS_COUNT, AuthorizationStatus} from '../../consts';
import {fetchData, fetchFavoriteFilmsList, fetchFilmById, fetchCommentsOnFilmByID, postCommentOnFilmByID, addFilmInUserList} from '../api-actions';
import MockAdapter from 'axios-mock-adapter';
import {adapterFilm, adapterFilms} from '../../adapters/films';
import {comments, filmsList, filmToServer, filmFromServer} from '../../utils/const-test';

const api = createAPI(() => {});

describe(`Reducer 'films' should work correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(films(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update when change genre`, () => {
    const state = initialState;
    const changeGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: GENERE_ALL
    };
    expect(films(state, changeGenreAction))
      .toEqual({...state, genre: GENERE_ALL});
  });

  it(`Reducer should update when show more films`, () => {
    const state = initialState;
    const showMoreFilmsAction = {
      type: ActionType.SHOW_MORE_FILMS,
      payload: FILMS_COUNT + FILMS_COUNT
    };
    expect(films(state, showMoreFilmsAction))
      .toEqual({...state, visibleFilms: FILMS_COUNT + FILMS_COUNT});
  });

  it(`Reducer should update when reset visible films`, () => {
    const state = initialState;
    const resetVisibleFilmsAction = {
      type: ActionType.RESET_VISIBLE_FILMS,
      payload: FILMS_COUNT
    };
    expect(films(state, resetVisibleFilmsAction))
      .toEqual({...state, visibleFilms: FILMS_COUNT});
  });

  it(`Reducer should update when load films list`, () => {
    const state = initialState;
    const loadFilmsListAction = {
      type: ActionType.LOAD_FILMS_LIST,
      payload: filmsList
    };
    expect(films(state, loadFilmsListAction))
      .toEqual({...state, films: adapterFilms(filmsList)});
  });

  it(`Reducer should update when load favorite films in user list`, () => {
    const state = initialState;
    const loadFavoriteFilmsListAction = {
      type: ActionType.LOAD_FAVORITE_FILMS_LIST,
      payload: filmsList
    };
    expect(films(state, loadFavoriteFilmsListAction))
      .toEqual({...state, favoriteFilmsList: adapterFilms(filmsList)});
  });

  it(`Reducer should update when load promo film`, () => {
    const state = initialState;
    const loadPromoFilmAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: filmToServer
    };
    expect(films(state, loadPromoFilmAction))
      .toEqual({...state, promo: adapterFilm(filmToServer)});
  });

  it(`Reducer should update when load comments for film`, () => {
    const state = initialState;
    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    };
    expect(films(state, loadCommentsAction))
      .toEqual({...state, reviews: comments});
  });

  it(`Reducer should update when apllycation ready status change`, () => {
    const status = true;
    const state = initialState;
    const setIsApplycationReadyAction = {
      type: ActionType.SET_IS_READY,
      payload: status
    };
    expect(films(state, setIsApplycationReadyAction))
      .toEqual({...state, isApplicationReady: status});
  });
});

describe(`Async operation work correctly`, () => {
  it(`should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoriteFilmsListLoader = fetchFavoriteFilmsList();
    apiMock
      .onGet(APIRoute.USER_LIST)
      .reply(200, [{fake: true}]);

    return fetchFavoriteFilmsListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FAVORITE_FILMS_LIST,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to post /favorite/id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 0;
    const status = true;
    const postFilmInUserListLoader = addFilmInUserList(id, status);

    apiMock
      .onPost(`/favorite/${id}/${Number(!status)}`)
      .reply(200, filmFromServer);

    return postFilmInUserListLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.POST_FILM_IN_USER_LIST,
          payload: {
            id: filmToServer.id,
            isFavorite: filmToServer.isFavorite
          },
        });
      });
  });
});

describe(`Async operation work correctly`, () => {
  it(`should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fetchFilmByIdLoader = fetchFilmById(id);
    apiMock
      .onGet(`${APIRoute.FILMS}/${id}`)
      .reply(200, [{fake: true}]);

    return fetchFilmByIdLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM_BY_ID,
          payload: [{fake: true}],
        });
      });
  });
});

describe(`Async operation work correctly`, () => {

  it(`should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fetchCommentsOnFilmByIDLoader = fetchCommentsOnFilmByID(id);
    apiMock
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, [{fake: true}]);

    return fetchCommentsOnFilmByIDLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: true}],
        });
      });
  });


  it(`Should make a correct API call to post /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const rating = 0;
    const comment = `test`;
    const postCommentLoader = postCommentOnFilmByID(id, rating, comment);
    apiMock
      .onPost(`/comments/${id}`, {rating, comment})
      .reply(200, {rating, comment});
    return postCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.POST_COMMENT,
          payload: {rating, comment},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `${APIRoute.FILMS}/${id}`,
        });
      });
  });
});

describe(`Async operation work correctly`, () => {
  it(`should make a correct API call to load data`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchDataLoader = fetchData();
    apiMock
    .onGet(APIRoute.PROMO)
    .reply(200, [{fake: true}]);
    return fetchDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FILMS_LIST,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_IS_READY,
          payload: true,
        });
      });
  });

});
