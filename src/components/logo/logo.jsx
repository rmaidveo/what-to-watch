import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({className}) => {
  return (
    <div className="logo">
      <Link to="/" className={`logo__link ${className}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = PropTypes.string.isRequired;
export default Logo;
