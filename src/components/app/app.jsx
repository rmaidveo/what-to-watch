import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import MyListPage from '../my-list-page/my-list-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {RouteType} from '../../consts';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RouteType.INDEX}>
          <MainPage />
        </Route>
        <Route exact path={RouteType.LOGIN}>
          <SignInPage/>
        </Route>
        <Route exact path={RouteType.USER_LIST}>
          <MyListPage />
        </Route>
        <Route exact path={RouteType.PLAYER} component={PlayerPage} />
        <Route exact path={RouteType.REVIEW} render={(routerProps) =>
          <AddReviewPage
            {...routerProps}
            onPostReview={()=>{}}/>}/>
        <Route exact path={RouteType.FILM_PAGE} component={FilmPage} />
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};
export default App;
