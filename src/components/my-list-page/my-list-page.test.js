import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import {films} from "../../mocks-test";
import {AuthorizationStatus} from '../../consts';
import {MyListPage} from './my-list-page';

const mockStore = configureStore({});

it(`MyList page should render correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    FILMS: {
      favoriteFilmsList: films,
      isFavoriteDataLoaded: true
    },
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
    }
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <MyListPage
            favoriteFilmsList={films}
            authorizationStatus={AuthorizationStatus.AUTH}
            onLoadFavoriteData={jest.fn()}
          />
        </Router>
      </Provider>
  );

  expect(screen.getByText(/My list/i)).toBeInTheDocument();
  expect(screen.getByText(/Catalog/i)).toBeInTheDocument();
});
