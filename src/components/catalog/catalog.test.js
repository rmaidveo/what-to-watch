import React from 'react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {FILMS_COUNT, GENERE_ALL} from '../../consts';
import thunk from 'redux-thunk';
import * as redux from "react-redux";
import {createAPI} from '../../services/api';
import {films} from '../../mocks-test';
import {Catalog} from './catalog';

const api = createAPI(() => {});
const middlleware = thunk.withExtraArgument(api);
const mockStore = configureStore([middlleware]);

it(`Should Catalog render correctly`, () => {
  const onShowMoreButtonClick = jest.fn();
  const history = createMemoryHistory();
  const store = mockStore({
    FILMS: {
      films,
      genre: GENERE_ALL
    },
  });
  const defaultProps = {
    visibleFilms: FILMS_COUNT,
  };


  render(
      <redux.Provider store={store}>
        <Router history={history}>
          <Catalog films={films} onShowMoreButtonClick={onShowMoreButtonClick} {...defaultProps}/>
        </Router>
      </redux.Provider>
  );
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
});
