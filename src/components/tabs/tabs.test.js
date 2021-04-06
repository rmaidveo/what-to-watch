import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import Tabs from './tabs';
import {film} from '../../mocks-test';

const mockStore = configureStore({});

it(`Tabs should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    film,
  });
  const {getByText} = render(
      <Provider store={store}>
        <Router history={history}>
          <Tabs film={film} />
        </Router>
      </Provider>
  );
  const overviewTab = getByText(`Overview`);
  const detailsTab = getByText(`Details`);
  const reviewsTab = getByText(`Reviews`);

  expect(overviewTab).toBeInTheDocument();
  expect(detailsTab).toBeInTheDocument();
  expect(reviewsTab).toBeInTheDocument();
});
