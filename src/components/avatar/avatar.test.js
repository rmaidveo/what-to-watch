import React from 'react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {AuthorizationStatus} from '../../consts';
import thunk from 'redux-thunk';
import * as redux from "react-redux";
import {createAPI} from '../../services/api';
import {Avatar} from './avatar';
import userEvent from '@testing-library/user-event';

const api = createAPI(() => {});
const middlleware = thunk.withExtraArgument(api);
const mockStore = configureStore([middlleware]);
const onLogout = jest.fn();
const onFollowingToMyList = jest.fn();

describe(`Test Avatar`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    USER: {
      userInfo: {
        email: `testUser@mail.ru`
      },
      authorizationStatus: AuthorizationStatus.AUTH},
  });
  it(`Should Avatar render correctly`, () => {
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Avatar onLogout={onLogout} onToMyListClick={onFollowingToMyList}/>
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Log out/i)).toBeInTheDocument();
  });
  it(`Avatar should be go to MyList`, () => {
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Avatar onLogout={onLogout} onToMyListClick={onFollowingToMyList}/>
          </Router>
        </redux.Provider>
    );
    userEvent.click(screen.getByTestId(`my-list`));
    expect(onFollowingToMyList).toBeCalled();
  });
  it(`Avatar should be go to Log out`, () => {
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Avatar onLogout={onLogout} onToMyListClick={onFollowingToMyList}/>
          </Router>
        </redux.Provider>
    );
    userEvent.click(screen.getByText(/Log out/i));
    expect(onLogout).toBeCalled();
  });
});
