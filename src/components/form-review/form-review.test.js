import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import FormReview from './form-review';
import thunk from 'redux-thunk';
import * as redux from "react-redux";
import {createAPI} from '../../services/api';
import configureStore from 'redux-mock-store';
import {films, film} from '../../mocks-test';
import {AuthorizationStatus} from '../../consts';

const api = createAPI(() => {});
const middlleware = thunk.withExtraArgument(api);
const mockStore = configureStore([middlleware]);

describe(`Test'ReviewFormView'`, () => {
  it(`Render component form of add review page'`, () => {
    const onFormSubmitHandler = jest.fn();
    const history = createMemoryHistory();
    const store = mockStore({
      FILMS: {films},
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH},
    });
    const defaultProps = {
      isReviewFormDisabled: false,
    };
    history.push(`/films/1/review`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FormReview id={film.id} color={film.backgroundColor} onPostReview={onFormSubmitHandler} {...defaultProps} />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(`Post`)).toBeInTheDocument();
    userEvent.type(screen.getByTestId(`textarea`), `test comment`);
    expect(screen.getByDisplayValue(`test comment`)).toBeInTheDocument();
  });
});
