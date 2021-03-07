import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {avatarPropTypes} from '../../prop-types';

const Avatar = ({userInfo}) => {

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
      <div className="user-block">
        <span className="movie-card__year"> {userInfo && userInfo.email} </span>
        <Link to="#" className="user-block__link">Log out</Link>
      </div>
    </div>
  );
};

Avatar.propTypes = avatarPropTypes;
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

export {Avatar};
export default connect(mapStateToProps, null)(Avatar);
