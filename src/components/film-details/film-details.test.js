import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import FilmDetails from './film-details';
import {film} from '../../mocks-test';

it(`FilmDetails renders correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Router history={history}>
        <FilmDetails
          film={film}
        />
      </Router>
  );
  expect(screen.getByText(film.director)).toBeInTheDocument();
  expect(screen.getByText(film.genre)).toBeInTheDocument();
  expect(screen.getByText(film.released)).toBeInTheDocument();
  expect(film.starring.every((item) => screen.getByText(item)));
});
