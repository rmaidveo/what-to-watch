import React from 'react';
import {Link} from 'react-router-dom';
import {RouteType} from '../../consts';
import Footer from '../footer/footer';
import Logo from '../logo/logo';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header movie-card__head">
          <Logo />
        </header>
        <Link className="page-title" to={RouteType.INDEX}>Go to main page</Link>
        <div className="sign-in user-page__content">
          <h1 id="foon" className="page-title user-page__title"> Page not found </h1>
          <br/>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
