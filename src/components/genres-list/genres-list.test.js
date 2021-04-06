import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import GenresList from './genres-list';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {films} from '../../mocks-test';
import {GENERE_ALL} from '../../consts';
import thunk from 'redux-thunk';
import * as redux from 'react-redux';
import {createAPI} from '../../services/api';

const api = createAPI(() => {});
const middlleware = thunk.withExtraArgument(api);
const mockStore = configureStore([middlleware]);

describe(`GenreList`, () => {
  const genreSelectHandler = jest.fn();
  const history = createMemoryHistory();
  const store = mockStore({
    FILMS: {
      films,
      genre: GENERE_ALL,
    }
  });

  it(`renders itself correctly`, () => {
    const activeGenreTabClassName = `catalog__genres-item--active`;
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <GenresList
              genre={GENERE_ALL}
              onGenreClick={genreSelectHandler}
            />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(GENERE_ALL).parentElement.classList.contains(activeGenreTabClassName)).toBe(true);
    expect(screen.getByText(`Drama`).parentElement.classList.contains(activeGenreTabClassName)).toBe(false);
  });
});
