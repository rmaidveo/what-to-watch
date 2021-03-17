import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer from './store/root-reducer';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/actions';
import {checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./consts";
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
