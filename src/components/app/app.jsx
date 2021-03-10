import React from 'react';
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import MyListPage from '../my-list-page/my-list-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {RouteType} from '../../consts';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory} >
      <Switch>
        <Route exact path={RouteType.INDEX}>
          <MainPage />
        </Route>
        <Route exact path={RouteType.LOGIN}>
          <SignInPage/>
        </Route>
        <PrivateRoute exact path={RouteType.USER_LIST}
          render={() => <MyListPage /> }
        />
        <Route exact path={RouteType.PLAYER} render={
          ({history}) => {
            return <PlayerPage onExitButtonClick={() => history.goBack()}
            />;
          }} />
        <PrivateRoute exact
          path={RouteType.REVIEW}
          render={(routerProps) =>
            <AddReviewPage
              {...routerProps}
              onPostReview={()=>{}}/>}>
        </PrivateRoute>
        <Route exact path={RouteType.FILM_PAGE} render={
          ({history, match}) => {
            return <FilmPage onAddReviewСlick={() => history.push(`/films/${match.params.id}/review`)}
              onPlayerVideoСlick={() => history.push(`../player/${match.params.id}`)}/>;
          }
        } />
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};
export default App;
