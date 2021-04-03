import {authorizationError, getUserAuthInfo, requireAuthorization} from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../consts';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: null,
  isLoginError: false
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    return {
      ...state,
      authorizationStatus: action.payload,
    };
  });
  builder.addCase(getUserAuthInfo, (state, action) => {
    state.userInfo = action.payload;
  });
  builder.addCase(authorizationError, (state, action) => {
    state.isLoginError = action.payload;
  });
});

export {user, initialState};
