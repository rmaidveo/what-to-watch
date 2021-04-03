import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../../consts';
import {SignInErrorMessage} from './sign-in-error-message';

const mockStore = configureStore({});
const store = {
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isLoginError: false
  }
};

describe(`SignIn`, () => {

  it(`renders correctly when email address or password is not valid `, () => {
    const testisLoginError = true;
    const testisValidEmail = false;
    const history = createMemoryHistory();

    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <SignInErrorMessage
              isLoginError={testisLoginError}
              isValidEmail={testisValidEmail}
            />
          </Router>
        </Provider>
    );
    expect(screen.getByText(/Please enter a valid email address or password/i)).toBeInTheDocument();
  });

  it(`renders correctly when login and password is error`, () => {
    const testisValidEmail = true;
    const testisLoginError = true;
    const history = createMemoryHistory();

    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <SignInErrorMessage
              isLoginError={testisLoginError}
              isValidEmail={testisValidEmail}
            />
          </Router>
        </Provider>
    );
    expect(screen.getByText(/We can’t recognize this email and password combination. Please try again./i)).toBeInTheDocument();
  });

});
