import React, {useEffect} from 'react';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo.jsx';
import Avatar from '../avatar/avatar';
import Autorized from '../autorized/autorized';
import {myListPropTypes} from '../../prop-types';
import {connect} from 'react-redux';
import LoadingPage from '../loading-page/loading-page';
import {fetchFavoriteFilmsList} from '../../store/api-actions';
import {AuthorizationStatus} from '../../consts';
import Footer from '../footer/footer';
import {getFavoriteFilms, getFavoriteFilm, getLoadedFavoriteDataStatus} from '../../store/films/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

const MyListPage = (props) => {
  const {favoriteFilmsList, favoriteFilm, isFavoriteDataLoaded, onLoadFavoriteData, authorizationStatus} = props;
  useEffect(() => {
    if (!isFavoriteDataLoaded || favoriteFilmsList[favoriteFilmsList.length - 1].id !== favoriteFilm.id) {
      onLoadFavoriteData();
    }
  }, [isFavoriteDataLoaded]);

  if (!isFavoriteDataLoaded) {
    return (
      <LoadingPage />
    );
  }

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list</h1>
          {authorizationStatus === AuthorizationStatus.AUTH ? <Avatar/> : <Autorized />}
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__movies-list">
            <FilmsList films={favoriteFilmsList}/>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  favoriteFilmsList: getFavoriteFilms(state),
  isFavoriteDataLoaded: getLoadedFavoriteDataStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
  favoriteFilm: getFavoriteFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteData() {
    dispatch(fetchFavoriteFilmsList());
  },
});

MyListPage.propTypes = myListPropTypes;
export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
