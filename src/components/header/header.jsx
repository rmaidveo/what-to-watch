import React from 'react';
import {connect} from 'react-redux';
import Logo from '../logo/logo.jsx';
import Avatar from '../avatar/avatar';
import Autorized from '../autorized/autorized';
import {AuthorizationStatus} from '../../consts';
import {getAuthorizationStatus} from '../../store/user/selectors.js';
import {headerPropTypes} from '../../prop-types.js';

const Header = ({authorizationStatus}) => {
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <Logo />
        {authorizationStatus === AuthorizationStatus.AUTH ? <Avatar /> : <Autorized />}
      </header>
    </>
  );
};

Header.propTypes = headerPropTypes;

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {Header};
export default connect(mapStateToProps, null)(Header);
