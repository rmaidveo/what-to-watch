import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {film, reviews} from '../../mocks-test';
import {FilmReviews} from './film-reviews';

describe(`Test FilmReview`, () => {
  it(`FilmReviews renders correctly`, () => {
    const history = createMemoryHistory();
    render(
        <Router history={history}>
          <FilmReviews
            getReviews={jest.fn()}
            film={film}
            reviews={reviews}
          />
        </Router>
    );
    expect(screen.getByTestId(/review-wrap/i)).toBeInTheDocument();
  });
});
