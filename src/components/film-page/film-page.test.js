import React from 'react';
import * as redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {FilmPage} from './film-page';
import {film, films, reviews} from '../../mocks-test';
import {createAPI} from '../../services/api';
import {AuthorizationStatus} from '../../consts';
import thunk from 'redux-thunk';

const api = createAPI(() => {});
const middlleware = thunk.withExtraArgument(api);
const mockStore = configureStore([middlleware]);

const onPlayerVideoСlick = jest.fn();
const onAddReviewСlick = jest.fn();
const onLoadFilmById = jest.fn();

describe(`Test FilmPage`, () => {
  it(`FilmPage renders correctly`, () => {
    const store = mockStore({
      FILMS: {
        films,
        favoriteFilmsList: films,
        reviews,
        isApplycationReady: true
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FilmPage
              films={films}
              isApplicationReady={true}
              onLoadFilmById={onLoadFilmById}
              activeFilm={film}
              authorizationStatus={AuthorizationStatus.AUTH}
              onPlayerVideoСlick={onPlayerVideoСlick}
              onAddReviewСlick={onAddReviewСlick}
            />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });
});
