
import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {films} from '../../mocks-test';
import FilmsList from './films-list';

describe(`FilmCard`, () => {
  it(`renders correctly`, () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
          <FilmsList
            films={films}
          />
        </Router>
    );

    expect(screen.getByTestId(`film-card-list`)).toBeInTheDocument();
  });
});
