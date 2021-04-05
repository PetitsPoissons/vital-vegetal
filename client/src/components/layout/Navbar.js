// React imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

// Style & Images
import M from 'materialize-css';

const Navbar = ({ logout, auth: { isAuthenticated, loading, me } }) => {
  useEffect(() => {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
  }, []);
  const authLinksSide = (
    <li>
      <a href="#!" className="grey-text text-darken-4" onClick={logout}>
        <i className="material-icons">logout</i>Sign Out
      </a>
    </li>
  );
  const guestLinksSide = (
    <li>
      <Link to="/auth" className="grey-text text-darken-4">
        <i className="material-icons grey-text text-darken-4">how_to_reg</i>Sign
        In / Up
      </Link>
    </li>
  );
  const authLinksMain = (
    <>
      <li className="cyan-text text-darken-2">
        {me ? me.username && `Hi ${me.username}` : 'Hi!'}
      </li>
      <li>
        <a href="#!" className="grey-text text-darken-4" onClick={logout}>
          <i className="material-icons grey-text text-darken-4">logout</i>
        </a>
      </li>
    </>
  );
  const guestLinksMain = (
    <li>
      <Link to="/auth" className="grey-text text-darken-4">
        Sign In / Up
      </Link>
    </li>
  );
  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <Link to="/">
            <i className="material-icons grey-text text-darken-4">home</i>Home
          </Link>
        </li>
        <li>
          <Link to="#!">
            <i className="material-icons grey-text text-darken-4">info</i>Why
            vegan?
          </Link>
        </li>
        <li>
          <Link to="#!">
            <i className="material-icons grey-text text-darken-4">menu_book</i>
            Recipes
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        {isAuthenticated ? authLinksSide : guestLinksSide}
      </ul>
      <div className="navbar-fixed">
        <nav className="no-shadows white">
          <div className="container">
            <Link
              to="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i
                className="material-icons grey-text text-darken-4"
                id="hamburger-menu"
              >
                menu
              </i>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {isAuthenticated ? authLinksMain : guestLinksMain}
            </ul>
          </div>
          <div className="nav-wrapper" style={{ marginTop: '2rem' }}>
            <div className="center-align">
              <Link
                to="/"
                className="large grey-text text-darken-4"
                id="vv-title"
              >
                Vital Vegetal
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

// bring in the auth state
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
