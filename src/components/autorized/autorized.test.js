import React from 'react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {AuthorizationStatus} from '../../consts';
import thunk from 'redux-thunk';
import * as redux from "react-redux";
import {createAPI} from '../../services/api';
import {Autorized} from './autorized';
import userEvent from '@testing-library/user-event';

const api = createAPI(() => {});
const middlleware = thunk.withExtraArgument(api);
const mockStore = configureStore([middlleware]);
describe(`Test Autorized`, () => {
  const onSignInClickHandler = jest.fn();
  const history = createMemoryHistory();
  const store = mockStore({
    USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
  });
  it(`Should AddReviewPage render correctly`, () => {
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Autorized onSignInClick={onSignInClickHandler}/>
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
  it(`Should Autorized should be go to Log In`, () => {
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Autorized onSignInClick={onSignInClickHandler}/>
          </Router>
        </redux.Provider>
    );
    userEvent.click(screen.getByText(/Sign in/i));
    expect(onSignInClickHandler).toBeCalled();
  });
});
