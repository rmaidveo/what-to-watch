import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from '../main-page/main-page';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmPage from '../film-page/film-page';
import MyListPage from '../my-list-page/my-list-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in/sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';
import {RouteType} from '../../consts';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import LoadingPage from "../loading-page/loading-page";
import {connect} from 'react-redux';
import {fetchData} from '../../store/api-actions';
import {appPropTypes} from '../../prop-types';
import {getLoadedDataStatus} from '../../store/films/selectors';

const App = (props) => {
  const {isDataLoaded, onLoadData} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingPage/>
    );
  }
  return (
    <BrowserRouter history={browserHistory} >
      <Switch>
        <Route exact path={RouteType.INDEX}
          render={() => <MainPage />}
        />
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
            return <FilmPage key={match.params.id} onAddReviewСlick={() => history.push(`/films/${match.params.id}/review`)}
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
const mapStateToProps = (state) => ({
  isDataLoaded: getLoadedDataStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchData());
  },
});

App.propTypes = appPropTypes;
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
