import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import MyListPage from '../my-list-page/my-list-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';

const App = ({filmsList, poster}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage filmsList={filmsList} poster={poster}/>
        </Route>
        <Route exact path="/login">
          <SignInPage/>
        </Route>
        <Route exact path="/mylist">
          <MyListPage/>
        </Route>
        <Route exact path="/player/:id?">
          <PlayerPage/>
        </Route>
        <Route exact path="/films/:id?/review">
          <AddReviewPage/>
        </Route>
        <Route exact path="/films/:id?" >
          <FilmPage/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  filmsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired
      })
  ).isRequired,
  poster: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
};

export default App;
