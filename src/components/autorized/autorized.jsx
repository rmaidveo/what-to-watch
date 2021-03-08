import React from 'react';
import {Link} from 'react-router-dom';
import {RouteType} from '../../consts';


const Autorized = () => {
  return (
    <div className="user-block">
      <Link to={RouteType.LOGIN} className="user-block__link">Sign in</Link>
    </div>
  );
};

export default Autorized;
