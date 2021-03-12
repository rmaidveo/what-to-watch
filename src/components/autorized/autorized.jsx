import React from 'react';
import {ActionCreator} from "../../store/actions";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Autorized = ({onSignInClick}) => {

  const handleSignInClick = (evt) => {
    evt.preventDefault();
    onSignInClick();
  };

  return (
    <div className="user-block">
      <a href="#" onClick={handleSignInClick} className="user-block__link">Sign in</a>
    </div>
  );
};

Autorized.propTypes = {
  onSignInClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSignInClick() {
    dispatch(ActionCreator.redirectToRoute(`/login`));
  }
});

export {Autorized};
export default connect(null, mapDispatchToProps)(Autorized);
