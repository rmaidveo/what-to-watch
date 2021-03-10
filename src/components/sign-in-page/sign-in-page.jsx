import React, {useRef} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login, getUserInfo} from "../../store/api-actions";
import Logo from '../logo/logo';
import {LOGO_FOOTER} from '../logo/const';

const SignInPage = ({onSubmit, setUserInfo}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });

    setUserInfo();
  };


  return (
    <>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="" className="sign-in__form" onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input"
                  ref={loginRef}
                  type="email"
                  name="user-email"
                  id="user-email"
                  placeholder="Email address"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={passwordRef}
                  className="sign-in__input"
                  placeholder="Password"
                  type="text"
                  name="user-password"
                  id="user-password"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <Logo className={LOGO_FOOTER} />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

SignInPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setUserInfo: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
  setUserInfo() {
    dispatch(getUserInfo());
  }
});

export {SignInPage};
export default connect(null, mapDispatchToProps)(SignInPage);
