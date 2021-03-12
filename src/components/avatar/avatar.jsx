import React from 'react';
import {connect} from 'react-redux';
import {avatarPropTypes} from '../../prop-types';
import {ActionCreator} from "../../store/actions";
import {loginOut} from "../../store/api-actions";

const Avatar = ({userInfo, onLogout, onToMyListClick}) => {

  const handleLogout = (evt) => {
    evt.preventDefault();
    onLogout();
  };

  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img onClick={onToMyListClick} src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
      <div className="user-block">
        <span className="movie-card__year"> {userInfo && userInfo.email} </span>
        <a href="#" onClick={handleLogout} className="user-block__link">Log out</a>
      </div>
    </div>
  );
};

Avatar.propTypes = avatarPropTypes;
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onToMyListClick() {
    dispatch(ActionCreator.redirectToRoute(`/mylist`));
  },
  onLogout() {
    dispatch(loginOut());
  },
});
export {Avatar};
export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
