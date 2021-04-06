import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import SignInPage from './sign-in-page';
import {AuthorizationStatus, RouteType} from '../../../consts';

const mockStore = configureStore({});
const store = {
  USER: {
    userInfo: null,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isLoginError: false
  }
};

describe(`SignIn`, () => {
  it(`renders correctly when user navigate to '/login' url`, () => {
    const testAuthorizationStatus = AuthorizationStatus.NO_AUTH;
    const history = createMemoryHistory();
    history.push(RouteType.LOGIN);

    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <SignInPage
              onSubmit={jest.fn()}
              authorizationStatus={testAuthorizationStatus}
            />
          </Router>
        </Provider>
    );

    expect(screen.getByTestId(`sign-in_btn`)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId(`login`), `testUser@mail.com`);
    userEvent.type(screen.getByTestId(`password`), `123456`);

    expect(screen.getByDisplayValue(/testUser@mail.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });

  it(`renders correctly when login is error`, () => {
    const testisLoginError = true;
    const history = createMemoryHistory();

    render(
        <Provider store={mockStore(store)}>
          <Router history={history}>
            <SignInPage
              onSubmit={jest.fn()}
              isLoginError={testisLoginError}
            />
          </Router>
        </Provider>
    );
    expect(screen.getByTestId(`sign-in_btn`)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId(`login`), `testUser@mail.com`);
    userEvent.type(screen.getByTestId(`password`), `123456`);

    expect(screen.getByDisplayValue(/testUser@mail.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });

});
