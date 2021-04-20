// React imports
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Redux imports
import { Provider } from 'react-redux';
import store from './store';
import { fetchMe } from './actions/authActions';

// Util imports
import setAuthToken from './utils/setAuthToken';

// Components
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import WhyVeganPage from './components/pages/WhyVeganPage';
import RecipesPage from './components/pages/RecipesPage';
import AuthPage from './components/pages/AuthPage';

// Styles & Assets
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from './components/layout/Theme';
import Toolbar from '@material-ui/core/Toolbar';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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

const App = (props) => {
  useEffect(() => {
    // check localStorage for a token and set the global headers with it if there is one there
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(fetchMe());
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Toolbar id="back-to-top-anchor" />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/why-vegan" component={WhyVeganPage}></Route>
            <Route exact path="/recipes" component={RecipesPage}></Route>
            <Route
              exact
              path="/recipe/:id"
              component={() => <div>ONE RECIPE DETAILS</div>}
            ></Route>
            <Route
              exact
              path="/breakfasts"
              component={() => <div>Breakfasts in progress</div>}
            ></Route>
            <Route
              exact
              path="/lunches"
              component={() => <div>Lunches in progress</div>}
            ></Route>
            <Route
              exact
              path="/snacks"
              component={() => <div>Snacks in progress</div>}
            ></Route>
            <Route
              exact
              path="/dinners"
              component={() => <div>Dinners in progress</div>}
            ></Route>
            <Route
              exact
              path="/drinks"
              component={() => <div>Drinks in progress</div>}
            ></Route>
            <Route
              exact
              path="/desserts"
              component={() => <div>Desserts in progress</div>}
            ></Route>
            <Route
              exact
              path="/forum"
              component={() => <div>Forum in progress</div>}
            ></Route>
            <Route exact path="/auth" component={AuthPage}></Route>
          </Switch>
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
