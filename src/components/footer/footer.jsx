import React from 'react';
import Logo from '../logo/logo.jsx';
import {LOGO_FOOTER} from '../logo/const';

const Footer = () => {
  return (
    <>
      <footer className="page-footer">
        <Logo className={LOGO_FOOTER} />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

