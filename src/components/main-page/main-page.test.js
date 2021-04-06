import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import {MainPage} from './main-page';
import {film, films} from '../../mocks-test';
import {AuthorizationStatus, FILMS_COUNT, GENERE_ALL} from '../../consts';
import thunk from 'redux-thunk';
import * as redux from "react-redux";
import {createAPI} from '../../services/api';

const api = createAPI(() => {});
const middlleware = thunk.withExtraArgument(api);
const mockStore = configureStore([middlleware]);

it(`MainScreen renders correctly`, () => {
  const history = createMemoryHistory();
  const store = mockStore({
    FILMS: {
      promo: film,
      films,
      favoriteFilmsList: films,
      isApplycationReady: true,
      visibleFilms: FILMS_COUNT,
      genre: GENERE_ALL
    },
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
    },
  });

  const {container} = render(
      <redux.Provider store={store}>
        <Router history={history}>
          <MainPage
            isApplicationReady={true}
            authorizationStatus={AuthorizationStatus.AUTH}
            promo={film}
          />
        </Router>
      </redux.Provider>
  );
  expect(container).toMatchSnapshot();
});
