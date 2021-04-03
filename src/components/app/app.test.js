import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, RouteType, FILMS_COUNT, GENERE_ALL} from '../../consts';
import App from './app';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {films, reviews, film} from '../../mocks-test';

const api = createAPI(() => {});

const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureStore(middlewares);

const storeNoAuth = {
  FILMS: {films, favoriteFilmsList: films, genre: GENERE_ALL, reviews, promo: film, visibleFilms: FILMS_COUNT, isApplicationReady: true},
  USER: {authorizationStatus: AuthorizationStatus.NO_AUTH, isLoginError: false, userInfo: {email: `test@mail.ru`}}
};
const storeAuth = {
  FILMS: {films, favoriteFilmsList: films, genre: GENERE_ALL, reviews, promo: film, visibleFilms: FILMS_COUNT, isApplicationReady: true},
  USER: {authorizationStatus: AuthorizationStatus.AUTH, isLoginError: false, userInfo: {email: `test@mail.ru`}}
};
describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main Page' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();

    render(
        <Provider store={mockStore(storeNoAuth)}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );
    expect(screen.getByText(/WTW/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
  });


  it(`Render 'Sign In Page' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(RouteType.LOGIN);

    render(
        <Provider store={mockStore(storeNoAuth)}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'MyList' when user navigate to '/mylist url`, () => {
    const history = createMemoryHistory();
    history.push(RouteType.USER_LIST);

    render(
        <Provider store={mockStore(storeAuth)}>
          <Router history={history}>
            <App/>
          </Router>
        </Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it(`Render 'Film' when user navigate to '/films/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(`/films/1`);

    render(
        <Provider store={mockStore(storeNoAuth)} >
          <Router history={history} >
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });

  it(`Render 'AddReview' when user navigate to '/films/:id/review' url`, () => {
    const history = createMemoryHistory();
    history.push(`/films/1/review`);

    render(
        <Provider store={mockStore(storeAuth)}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });

  it(`Render 'Player' when user navigate to '/player/:id url`, () => {
    const history = createMemoryHistory();
    history.push(`/player/1`);

    render(
        <Provider store={mockStore(storeNoAuth)} >
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
  });

  it(`Render 'NotFoundPage' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/not-found-page`);

    render(
        <Provider store={mockStore(storeNoAuth)}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
    );

    expect(screen.getByText(`Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Go to main page`)).toBeInTheDocument();
  });
});
