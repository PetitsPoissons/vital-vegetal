// React imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

// Style & Images
import M from 'materialize-css';
import vvLogoTransparentBg from '../../assets/vv-logo-transparentBg.png';

const NavbarHome = ({ logout, auth: { isAuthenticated, loading, me } }) => {
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
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/why-vegan" className="grey-text text-darken-4">
          Why vegan?
        </Link>
      </li>
      <li>
        <Link to="/recipes" className="grey-text text-darken-4">
          Recipes
        </Link>
      </li>
      <li>
        <Link to="/auth" className="grey-text text-darken-4">
          <i className="material-icons grey-text text-darken-4">how_to_reg</i>
        </Link>
      </li>
    </ul>
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
          <Link to="/why-vegan">
            <i className="material-icons grey-text text-darken-4">info</i>Why
            vegan?
          </Link>
        </li>
        <li>
          <Link to="/recipes">
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

            {isAuthenticated ? authLinksMain : guestLinksMain}
          </div>
          <div className="nav-wrapper" style={{ marginTop: '2rem' }}></div>
        </nav>
      </div>
    </>
  );
};

NavbarHome.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

// bring in the auth state
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavbarHome);
