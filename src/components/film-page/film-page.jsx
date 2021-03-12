import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Logo from '../logo/logo';
import {filmPageOfFilmPropTypes} from '../../prop-types';
import FilmsList from '../films-list';
import {LOGO_FOOTER} from '../logo/const';
import Tabs from '../tabs/tabs';
import {AuthorizationStatus} from '../../consts';
import NotFoundPage from '../not-found-page/not-found-page';
import {fetchCommentsOnFilmByID, fetchFilmById} from '../../store/api-actions';
import Avatar from '../avatar/avatar';
import Autorized from '../autorized/autorized';
import {useParams} from 'react-router-dom';

const FilmPage = (props) => {
  const {films, authorizationStatus, onAddReviewСlick, onPlayerVideoСlick, activeFilm, commentsOnActiveFilm, activeFilmLoaded, onLoadFilmById} = props;
  const id = parseInt(useParams().id, 10);
  const sortedFilms = films.filter((sortFilm) => (sortFilm.genre === activeFilm.genre && sortFilm.id !== activeFilm.id)).slice(0, 4);

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

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo />
            {authorizationStatus === AuthorizationStatus.AUTH ? <Avatar/> : <Autorized />}
          </header>

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

FilmPage.propTypes = filmPageOfFilmPropTypes;

const mapStateToProps = (state) => ({
  films: state.films,
  activeFilmLoaded: state.activeFilmLoaded,
  authorizationStatus: state.authorizationStatus,
  activeFilm: state.activeFilm,
  commentsOnActiveFilm: state.commentsOnActiveFilm
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFilmById(id) {
    dispatch(fetchFilmById(id));
    dispatch(fetchCommentsOnFilmByID(id));
  }
});
export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
