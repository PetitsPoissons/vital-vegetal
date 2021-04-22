// React imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Styles & Assets
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';

import longLogo from '../../assets/vvLogoLong.png';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navigationBar: {
    backgroundImage: 'linear-gradient(white, transparent)',
    [theme.breakpoints.up('lg')]: {
      height: '10rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: '7.5rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '6.2rem',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '4rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      marginTop: '3rem',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '2.2rem',
    },
  },
  logo: {
    [theme.breakpoints.up('lg')]: {
      width: '30rem',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '22rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '18rem',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    [theme.breakpoints.up('lg')]: {
      fontSize: '20rem',
      marginLeft: theme.spacing(4),
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '8rem',
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      marginLeft: theme.spacing(2),
    },
  },
  button: {
    ...theme.typography.login,
    borderRadius: '50px',
    height: '45px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '20rem',
      marginLeft: theme.spacing(6),
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '10rem',
      marginLeft: theme.spacing(5),
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      marginLeft: theme.spacing(4),
    },
  },
  menuFirstItem: {
    ...theme.typography.tab,
    textTransform: 'uppercase',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, idx) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(idx);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    {
      name: 'Recipes',
      link: '/recipes',
    },
    {
      name: 'Breakfasts',
      link: '/breakfasts',
    },
    {
      name: 'Lunches',
      link: '/lunches',
    },
    {
      name: 'Snacks',
      link: '/snacks',
    },
    {
      name: 'Dinners',
      link: '/dinners',
    },
    {
      name: 'Drinks',
      link: '/drinks',
    },
    {
      name: 'Desserts',
      link: '/desserts',
    },
  ];

  const tabs = (
    <>
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
        elevation={0}
      >
        {menuOptions.map((option, idx) => {
          return (
            <MenuItem
              key={option}
              component={Link}
              to={option.link}
              classes={{
                root: idx === 0 ? classes.menuFirstItem : classes.menuItem,
              }}
              onClick={(e) => {
                handleMenuItemClick(e, idx);
                handleClose();
                setValue(2);
              }}
              selected={idx === selectedIndex && value === 2}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/why-vegan':
        if (value !== 1) {
          setValue(1);
        }
        break;
      case '/recipes':
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(0);
        }
        break;
      case '/breakfasts':
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(1);
        }
        break;
      case '/lunches':
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(2);
        }
        break;
      case '/snacks':
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(3);
        }
        break;
      case '/dinners':
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(4);
        }
        break;
      case '/drinks':
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(5);
        }
        break;
      case '/desserts':
        if (value !== 2) {
          setValue(2);
          setSelectedIndex(6);
        }
        break;
      case '/forum':
        if (value !== 3) {
          setValue(3);
        }
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar
          position="static"
          color="white"
          className={classes.navigationBar}
          elevation={0}
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
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
