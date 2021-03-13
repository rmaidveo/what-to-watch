import React, {useState} from 'react';
import Logo from '../logo/logo.jsx';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {mainPagePropTypes} from '../../prop-types';
import {LOGO_FOOTER} from '../logo/const';
import GenresList from '../genres-list/genres-list';
import FilmsList from '../films-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import {getSortByGenre} from '../../selectors/selectors';
import {FILMS_COUNT} from '../../consts';
import Avatar from '../avatar/avatar';
import Autorized from '../autorized/autorized';
import {AuthorizationStatus} from '../../consts';

const MainPage = (props) => {
  const {films, promo, reviews, authorizationStatus} = props;
  const [filmsCount, setFilmsCount] = useState(FILMS_COUNT);
  const handleShowMoreButtonClick = () => setFilmsCount((currentCount) => currentCount + FILMS_COUNT);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promo.backgroundImage} alt={promo.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <Logo />
          {authorizationStatus === AuthorizationStatus.AUTH ? <Avatar /> : <Autorized />}
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promo.imageSrc} alt={promo.name + `poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.genre}</span>
                <span className="movie-card__year">{promo.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${promo.id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"> </use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmsList films={films.slice(0, filmsCount)} reviews={reviews}/>
          {filmsCount < films.length && <ShowMoreButton onButtonClick={handleShowMoreButtonClick} />}
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

MainPage.propTypes = mainPagePropTypes;

const mapStateToProps = (state) => ({
  films: getSortByGenre(state),
  promo: state.promo,
  reviews: state.reviews,
  authorizationStatus: state.authorizationStatus
});

export {MainPage};
export default connect(mapStateToProps, null)(MainPage);
