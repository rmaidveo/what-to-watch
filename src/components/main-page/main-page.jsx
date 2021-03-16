import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {mainPagePropTypes} from '../../prop-types';
import Header from '../header/header';
import Footer from '../footer/footer.jsx';
import Catalog from '../catalog/catalog';
import {getPromo} from '../../store/films/selectors';

const MainPage = (props) => {
  const {promo} = props;

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promo.backgroundImage} alt={promo.name}/>
        </div>
        <Header/>
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
        <Catalog />
        <Footer/>
      </div>
    </>
  );
};

MainPage.propTypes = mainPagePropTypes;

const mapStateToProps = (state) => ({
  promo: getPromo(state)
});

export {MainPage};
export default connect(mapStateToProps, null)(MainPage);
