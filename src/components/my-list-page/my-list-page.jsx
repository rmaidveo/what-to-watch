import React, {useEffect} from 'react';
import FilmsList from '../films-list';
import Logo from '../logo/logo.jsx';
import Avatar from '../avatar/avatar';
import Autorized from '../autorized/autorized';
import {myListPropTypes} from '../../prop-types';
import {LOGO_FOOTER} from '../logo/const';
import {connect} from 'react-redux';
import LoadingPage from '../loading-page/loading-page';
import {fetchFavoriteFilmsList} from '../../store/api-actions';
import {AuthorizationStatus} from '../../consts';

const MyListPage = (props) => {
  const {isFavoriteFilmsList, isFavoriteDataLoaded, onLoadFavoriteData, authorizationStatus} = props;

  useEffect(() => {
    if (!isFavoriteDataLoaded) {
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
            <FilmsList films={isFavoriteFilmsList}/>
          </div>
        </section>
        <footer className="page-footer">
          <Logo className={LOGO_FOOTER} />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  isFavoriteFilmsList: state.isFavoriteFilmsList,
  isFavoriteDataLoaded: state.isFavoriteDataLoaded,
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteData() {
    dispatch(fetchFavoriteFilmsList());
  },
});

MyListPage.propTypes = myListPropTypes;
export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
