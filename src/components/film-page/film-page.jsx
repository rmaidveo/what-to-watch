import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from '../logo/logo';
import {filmPropTypes, reviewPropTypes} from '../../prop-types';
import FilmsList from '../films-list';
import {LOGO_FOOTER} from '../logo/const';
import Tabs from '../tabs/tabs';

const FilmPage = (props) => {
  const {films, reviews} = props;
  const {id: filmId} = props.match.params;
  const film = films.find((item) => item.id === parseInt(filmId, 10));
  const history = useHistory();
  const sortedFilms = films.filter((sortFilm) => (sortFilm.genre === film.genre && sortFilm.id !== film.id)).slice(0, 4);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo />
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={() => history.push(`../player/${film.id}`)} className="btn btn--play movie-card__button" type="button">
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
                <button onClick={() => history.push(`${film.id}/review`)} className="btn movie-card__button">Add review</button>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.imageSrc} alt={film.name} width="218" height="327" />
            </div>
            <Tabs film={film} reviews={reviews}> </Tabs>
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

FilmPage.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes).isRequired
  ),
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired,
  ),
  match: PropTypes.object
};
const mapStateToProps = (state) => ({
  films: state.films,
  reviews: state.reviews
});

export {FilmPage};
export default connect(mapStateToProps, null)(FilmPage);
