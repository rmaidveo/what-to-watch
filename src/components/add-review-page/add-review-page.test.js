import React from 'react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import AddReviewPage from './add-review-page';
import {AuthorizationStatus} from '../../consts';
import thunk from 'redux-thunk';
import * as redux from "react-redux";
import {createAPI} from '../../services/api';
import {films} from '../../mocks-test';

const api = createAPI(() => {});
const middlleware = thunk.withExtraArgument(api);
const mockStore = configureStore([middlleware]);

it(`Should AddReviewPage render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    FILMS: {films},
    USER: {authorizationStatus: AuthorizationStatus.AUTH},
  });
  const defaultProps = {
    match: {params: {id: 1}},
  };
  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <AddReviewPage onPostReview={jest.fn()} onLoadFilmById={jest.fn()} {...defaultProps}/>
        </Router>
      </redux.Provider>
  );
  expect(screen.getByText(/Add review/i)).toBeInTheDocument();
});
