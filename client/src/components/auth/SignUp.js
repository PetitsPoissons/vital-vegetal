// React imports
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../actions/authActions';

const SignUp = ({ signUp, auth: { errorMessage } }) => {
  const [signUpForm, setSignUpForm] = useState({
    signUpUsername: '',
    signUpEmail: '',
    signUpPassword: '',
  });

  const onChange = (e) =>
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signUp({
      username: signUpForm.signUpUsername,
      email: signUpForm.signUpEmail,
      password: signUpForm.signUpPassword,
    });
    if (!errorMessage) {
      return <Redirect to="/" />;
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="row">
        <div className="col s12">JOIN IN!</div>
        <div className="input-field col s12">
          <i className="material-icons prefix">person</i>
          <input
            name="signUpUsername"
            type="text"
            id="signUpUsername"
            value={signUpForm.signUpUsername}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="signUpUsername">Username</label>
        </div>
        <div className="input-field col s12">
          <i className="material-icons prefix">alternate_email</i>
          <input
            name="signUpEmail"
            type="email"
            id="signUpEmail"
            className="validate"
            value={signUpForm.signUpEmail}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="signUpEmail">Email</label>
          <span
            className="helper-text"
            data-error="wrong!"
            data-success="right!"
          >
            Please enter a valid email
          </span>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">password</i>
          <input
            name="signUpPassword"
            type="password"
            id="signUpPassword"
            className="validate"
            value={signUpForm.signUpPassword}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="signUpPassword">Password</label>
          <span
            className="helper-text"
            data-error="wrong!"
            data-success="right!"
          >
            Password should be at least six characters long
          </span>
        </div>
      </div>
      {errorMessage ? (
        <div className="alert amber darken-2">{errorMessage}</div>
      ) : null}
      <button
        className="btn waves-effect waves-blue-grey blue-grey darken-1"
        type="submit"
        name="action"
      >
        Sign Up
      </button>
    </form>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signUp })(SignUp);
