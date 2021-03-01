import React from 'react';
import FilmsList from '../films-list';
import Logo from '../logo/logo.jsx';
import {dataPropTypes} from '../../prop-types';
import {LOGO_FOOTER} from '../logo/const';

const MyListPage = (props) => {
  const {films} = props;
  const favoriteFilms = films.filter(function (film) {
    return film.isFavorite;
  });

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list</h1>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__movies-list">
            <FilmsList films={favoriteFilms}/>
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

MyListPage.propTypes = dataPropTypes;
export default MyListPage;
