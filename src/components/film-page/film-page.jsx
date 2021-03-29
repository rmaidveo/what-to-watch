import React, {useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {filmPageOfFilmPropTypes} from '../../prop-types';
import FilmsList from '../films-list/films-list';
import Tabs from '../tabs/tabs';
import Header from '../header/header';
import {AuthorizationStatus} from '../../consts';
import NotFoundPage from '../not-found-page/not-found-page';
import {fetchFilmById} from '../../store/api-actions';
import Footer from '../footer/footer';
import {getApplycationStatus, getFilms, getFilmsInFilmPage} from '../../store/films/selectors';
import {getActiveFilm} from '../../store/films/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import AddInList from '../add-in-list/add-in-list';

const FilmPage = (props) => {
  const {authorizationStatus, onPlayerVideoСlick, activeFilm, isApplicationReady, onLoadFilmById, onAddReviewСlick} = props;
  const sortedFilms = useSelector(getFilmsInFilmPage(activeFilm));

  useEffect(() => {
    if (!isApplicationReady) {
      onLoadFilmById(activeFilm.id);
    }
  }, [activeFilm]);

  if (!isApplicationReady) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <>
      <section style={{backgroundColor: activeFilm.backgroundColor}}
        className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={activeFilm.backgroundImage} alt={activeFilm.name} />
          </div>
          <Header/>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{activeFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{activeFilm.genre}</span>
                <span className="movie-card__year">{activeFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={() => onPlayerVideoСlick()} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <AddInList id={activeFilm.id} />
                  : ``}
                {authorizationStatus === AuthorizationStatus.AUTH ? <button onClick={() => onAddReviewСlick()} className="btn movie-card__button">Add review</button> : ``}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={activeFilm.imageSrc} alt={activeFilm.name} width="218" height="327" />
            </div>
            <Tabs film={activeFilm}> </Tabs>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={sortedFilms}/>
        </section>
        <Footer/>
      </div>
    </>
  );
};

FilmPage.propTypes = filmPageOfFilmPropTypes;

const mapStateToProps = (state, ownProps) => ({
  films: getFilms(state),
  isApplicationReady: getApplycationStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
  activeFilm: getActiveFilm(state, parseInt(ownProps.id, 10))
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmById(id) {
    dispatch(fetchFilmById(id));
  },
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
