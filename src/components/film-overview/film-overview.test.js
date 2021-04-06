import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import FilmOverview from './film-overview';
import {film} from '../../mocks-test';

it(`FilmDetails renders correctly`, () => {
  const history = createMemoryHistory();
  const {getByTestId} = render(
      <Router history={history}>
        <FilmOverview
          film={film}
        />
      </Router>
  );
  const directorElement = getByTestId(`director-overview`);
  const starringElement = getByTestId(`starring-overview`);
  const runTimeElement = getByTestId(`rating-overview`);

  expect(directorElement).toBeInTheDocument();
  expect(starringElement).toBeInTheDocument();
  expect(runTimeElement).toBeInTheDocument();
});
