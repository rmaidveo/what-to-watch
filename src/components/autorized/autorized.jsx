import React from 'react';
import {redirectToRoute} from "../../store/actions";
import {connect} from 'react-redux';
import {autorizedPropTypes} from '../../prop-types';

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

Autorized.propTypes = autorizedPropTypes;
const mapDispatchToProps = (dispatch) => ({
  onSignInClick() {
    dispatch(redirectToRoute(`/login`));
  }
});

export {Autorized};
export default connect(null, mapDispatchToProps)(Autorized);
