import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {LOGO_FOOTER} from '../logo/const';

const NotFoundPage = () => {

  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
        </header>

        <div className="sign-in user-page__content">
          <h1 className="page-title user-page__title">Page not found
            <br/>
            <Link className="page-title" to="/">Go to main page</Link>
          </h1>
        </div>

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

export default NotFoundPage;
