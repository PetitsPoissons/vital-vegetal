// React imports
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMe } from './actions/authActions';

// Components
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import WhyVeganPage from './components/pages/WhyVeganPage';
import RecipePage from './components/pages/RecipePage';
import AuthPage from './components/pages/AuthPage';

const App = ({ fetchMe }) => {
  useEffect(() => {
    if (localStorage.token) {
      fetchMe();
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/why-vegan" component={WhyVeganPage}></Route>
        <Route exact path="/recipes" component={RecipePage}></Route>
        <Route exact path="/auth" component={AuthPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  fetchMe: PropTypes.func.isRequired,
};

export default connect(null, { fetchMe })(App);
