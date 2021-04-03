import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import LoadingPage from './loading-page';
it(`LoadingPage should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <LoadingPage />
      </Router>
  );
  const headerElement = getByText(`WTW`);
  const loadingElement = getByText(`LOADING...`);
  expect(headerElement).toBeInTheDocument();
  expect(loadingElement).toBeInTheDocument();
});
