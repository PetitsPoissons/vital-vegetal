// React imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Styles & Assets
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
  logoContainer: {
    marginTop: '3em',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    width: '22vw',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: theme.spacing(4),
  },
  button: {
    ...theme.typography.login,
    borderRadius: '50px',
    height: '45px',
    marginLeft: theme.spacing(6),
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

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/why-vegan' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/recipes' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/forum' && value !== 3) {
      setValue(3);
    }
  }, [value]);

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          color="white"
          className={classes.navigationBar}
        >
          <Toolbar>
            <Button
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img alt="project logo" src={longLogo} className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="white"
            >
              <Tab className={classes.tab} component={Link} to="/" label="" />
              <Tab
                className={classes.tab}
                component={Link}
                to="/why-vegan"
                label="Why Vegan?"
              />
              <Tab
                aria-owns={anchorEl ? 'recipes-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={(e) => handleClick(e)}
                to="/recipes"
                label="Recipes"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/forum"
                label="Forum"
              />
            </Tabs>
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Sign In|Up
            </Button>
            <Menu
              id="recipes-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/recipes"
              >
                Recipes
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/breakfasts"
              >
                Breakfasts
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/lunches"
              >
                Lunches
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/snacks"
              >
                Snacks
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/dinners"
              >
                Dinners
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/drinks"
              >
                Drinks
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(2);
                }}
                component={Link}
                to="/desserts"
              >
                Desserts
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
