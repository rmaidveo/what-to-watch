import React from 'react';
import {render, screen} from '@testing-library/react';
import * as redux from "react-redux";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import Header from './header';
import {AuthorizationStatus} from '../../consts';

const mockStore = configureStore({});

describe(`Test Header`, () => {
  it(`Logo should render correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH
      }
    });
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header authorizationStatus={AuthorizationStatus.AUTH} />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Log out/i)).toBeInTheDocument();
  });


  it(`Logo should render correctly`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH
      }
    });
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header authorizationStatus={AuthorizationStatus.NO_AUTH} />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
