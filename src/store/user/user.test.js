import {user, initialState} from './user';
import {ActionType} from '../actions';
import {createAPI} from '../../services/api';
import {APIRoute, RouteType, AuthorizationStatus} from '../../consts';
import {checkAuth, login} from '../api-actions';
import MockAdapter from 'axios-mock-adapter';

const api = createAPI(() => {});
describe(`Reducer 'user' should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update authorizationStatus to 'auth'`, () => {
    const state = initialState;
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };
    expect(user(state, requiredAuthorizationAction))
      .toEqual({...state, authorizationStatus: AuthorizationStatus.AUTH});
  });
});

describe(`Async operation work correctly`, () => {
  it(`should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_USER_INFO,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_USER_INFO,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: RouteType.INDEX,
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.AUTHORIZATION_ERROR,
          payload: false,
        });
      });
  });
});

