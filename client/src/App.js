// React imports
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMe } from './actions/authActions';

// Components
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import WhyVeganPage from './components/pages/WhyVeganPage';
import RecipesPage from './components/pages/RecipesPage';
import RecipePage from './components/pages/RecipePage';
import AuthPage from './components/pages/AuthPage';

// Styles & Assets
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const App = (props, { fetchMe }) => {
  useEffect(() => {
    if (localStorage.token) {
      fetchMe();
    }
  }, []);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Toolbar id="back-to-top-anchor" />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/why-vegan" component={WhyVeganPage}></Route>
        <Route exact path="/recipes" component={RecipesPage}></Route>
        <Route exact path="/recipe/:id" component={RecipePage}></Route>
        <Route exact path="/auth" component={AuthPage}></Route>
      </Switch>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </BrowserRouter>
  );
};

App.propTypes = {
  fetchMe: PropTypes.func.isRequired,
};

export default connect(null, { fetchMe })(App);
