import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

const NotFoundPage = () => {
  return (
    <>
      <div className="user-page">
        <Header/>
        <div className="sign-in user-page__content">
          <h1 className="page-title user-page__title">Page not found
            <br/>
            <Link className="page-title" to="/"> Go to main page</Link>
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;
