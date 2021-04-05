// React imports
import React from 'react';
import { Redirect } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import SignUp from '../auth/SignUp';
import SignIn from '../auth/SignIn';

const AuthPage = ({ auth: { isAuthenticated } }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container" style={{ marginTop: '3rem' }}>
      <div className="row">
        <div className="col s6">
          <SignUp />
        </div>
        <div className="col s6">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AuthPage);
