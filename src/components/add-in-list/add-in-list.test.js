import React from 'react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {AuthorizationStatus} from '../../consts';
import thunk from 'redux-thunk';
import * as redux from "react-redux";
import {createAPI} from '../../services/api';
import {films, film} from '../../mocks-test';
import {AddInList} from './add-in-list';

const api = createAPI(() => {});
const middlleware = thunk.withExtraArgument(api);
const mockStore = configureStore([middlleware]);

it(`Should AddReviewPage render correctly`, () => {
  const onFollowingToMyList = jest.fn();
  const history = createMemoryHistory();
  const store = mockStore({
    FILMS: {favoriteFilmsList: films},
    USER: {authorizationStatus: AuthorizationStatus.AUTH},
  });
  const defaultProps = {
    match: {params: {id: film.id}},
  };

  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <AddInList id={film.id} onAddUserListСlick={onFollowingToMyList} {...defaultProps}/>
        </Router>
      </redux.Provider>
  );
  expect(screen.getByText(/My list/i)).toBeInTheDocument();
});
