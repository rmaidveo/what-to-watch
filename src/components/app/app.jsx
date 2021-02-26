import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import MyListPage from '../my-list-page/my-list-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {appPropTypes} from '../../prop-types.js';
import {RouteType} from '../../consts';

const App = ({films, promo, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RouteType.INDEX}>
          <MainPage films={films} promo={promo} reviews={reviews} />
        </Route>
        <Route exact path={RouteType.LOGIN}>
          <SignInPage/>
        </Route>
        <Route exact path={RouteType.USER_LIST}>
          <MyListPage films={films}/>
        </Route>
        <Route exact path={RouteType.PLAYER} render={(routerProps) =>
          <PlayerPage films={films} {...routerProps}/>}/>
        <Route exact path={RouteType.REVIEW} render={(routerProps) =>
          <AddReviewPage films={films}
            {...routerProps}
            onPostReview={()=>{}}/>}/>
        <Route exact path={RouteType.FILM_PAGE} render={(routerProps) =>
          <FilmPage films={films} reviews={reviews} {...routerProps}/>} />
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appPropTypes;
export default App;
