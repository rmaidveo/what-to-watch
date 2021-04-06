import React from 'react';
import {connect} from 'react-redux';
import {getLoginError} from '../../../store/user/selectors';
import {signInErrorMessagePropTypes} from '../../../prop-types';

const SignInErrorMessage = (props) => {
  const {isLoginError, isValidEmail} = props;

  const errorText = (!isValidEmail) ? `Please enter a valid email address or password` : `We can’t recognize this email\n and password combination. Please try again.`;

  if (isLoginError || !isValidEmail) {
    return (
      <div className="sign-in__message">
        <p>
          {errorText}
        </p>
      </div>
    );
  } return ``;
};

SignInErrorMessage.propTypes = signInErrorMessagePropTypes;
const mapStateToProps = (state) => ({
  isLoginError: getLoginError(state)
});

export {SignInErrorMessage};
export default connect(mapStateToProps, null)(SignInErrorMessage);
