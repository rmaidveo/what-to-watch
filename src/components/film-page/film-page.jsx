import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {filmPageOfFilmPropTypes} from '../../prop-types';
import FilmsList from '../films-list/films-list';
import Tabs from '../tabs/tabs';
import Header from '../header/header';
import {AuthorizationStatus} from '../../consts';
import NotFoundPage from '../not-found-page/not-found-page';
import {fetchCommentsOnFilmByID, fetchFilmById} from '../../store/api-actions';
import {useParams} from 'react-router-dom';
import Footer from '../footer/footer';
import {getFilmsOfSameGenre} from '../../store/films/selectors';
import {getActiveFilm, getActiveFilmLoaded} from '../../store/active-film/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getCommentsOnActiveFilm} from '../../store/reviews/selectors';

const FilmPage = (props) => {
  const {sortedFilms, authorizationStatus, onAddReviewСlick, onPlayerVideoСlick, activeFilm, commentsOnActiveFilm, activeFilmLoaded, onLoadFilmById} = props;
  const id = parseInt(useParams().id, 10);

  useEffect(() => {
    if (!activeFilmLoaded || activeFilm.id !== id) {
      onLoadFilmById(id);
    }
  }, [activeFilm]);

  if (!activeFilmLoaded) {
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
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
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
            <Tabs film={activeFilm} reviews={commentsOnActiveFilm}> </Tabs>
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

const mapStateToProps = (state) => ({
  activeFilmLoaded: getActiveFilmLoaded(state),
  sortedFilms: getFilmsOfSameGenre(state),
  authorizationStatus: getAuthorizationStatus(state),
  activeFilm: getActiveFilm(state),
  commentsOnActiveFilm: getCommentsOnActiveFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmById(id) {
    dispatch(fetchFilmById(id));
    dispatch(fetchCommentsOnFilmByID(id));
  }
});
export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
