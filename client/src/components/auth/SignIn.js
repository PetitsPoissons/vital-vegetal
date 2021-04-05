// React imports
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from '../../actions/authActions';

const SignIn = ({ signIn, auth: { errorMessage } }) => {
  const [signInForm, setSignInForm] = useState({
    signInEmail: '',
    signInPassword: '',
  });

  const onChange = (e) =>
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signIn({
      email: signInForm.signInEmail,
      password: signInForm.signInPassword,
    });
    if (!errorMessage) {
      return <Redirect to="/" />;
    }
  };

  return (
    <div className="card-panel blue-grey darken-1 white-text">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <div className="col s12">Already signed up? Welcome back!</div>
          <div className="input-field col s12">
            <i className="material-icons prefix">alternate_email</i>
            <input
              name="signInEmail"
              type="email"
              id="signInEmail"
              value={signInForm.signInEmail}
              onChange={(e) => onChange(e)}
            />
            <label htmlFor="signInEmail">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">password</i>
            <input
              name="signInPassword"
              type="password"
              id="signInPassword"
              value={signInForm.signInPassword}
              onChange={(e) => onChange(e)}
            />
            <label htmlFor="signInPassword">Password</label>
          </div>
        </div>
        {errorMessage ? (
          <div className="alert amber darken-2">{errorMessage}</div>
        ) : null}
        <button
          className="btn waves-effect waves-blue-grey blue-grey-text text-darken-1 white"
          type="submit"
          name="action"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signIn })(SignIn);
