// React imports
import React from 'react';

// Styles & Assets
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import longLogo from '../../assets/vvLogoLong.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navigationBar: {
    height: '13vh',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    paddingTop: '2em',
    paddingBottom: '1em',
    width: '20vw',
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <HideOnScroll {...props}>
          <AppBar
            position="fixed"
            color="white"
            className={classes.navigationBar}
          >
            <Toolbar disableGutters>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <img alt="project logo" src={longLogo} className={classes.logo} />
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </div>
    </>
  );
}
