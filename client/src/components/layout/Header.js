// React imports
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux imports
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

// Styles & Assets
import longLogo from '../../assets/vvLogoLong.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function HideOnScroll(props) {
  // console.log('props', props);
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
  offset: {
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
  navigationBar: {
    backgroundColor: 'transparent',
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
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '4rem',
    width: '4rem',
  },
  // drawer: {
  //   backgroundColor: theme.palette.common.white,
  // },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerItemAuth: {
    backgroundColor: theme.palette.common.turquoise,
    '&:hover': {
      backgroundColor: theme.palette.common.dkBlueGrey,
    },
  },
  drawerItemAuthIcon: {
    color: 'white',
  },
  drawerItemAuthText: {
    ...theme.typography.tab,
    color: 'white',
  },
}));

const Header = (props) => {
  console.log('props', props);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, idx) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(idx);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const authMainButton = (
    <Button
      component={Link}
      to="/"
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={props.logout}
    >
      Sign Out
    </Button>
  );

  const guestMainButton = (
    <Button
      component={Link}
      to="/auth"
      variant="contained"
      color="secondary"
      className={classes.button}
    >
      Sign In|Up
    </Button>
  );

  const authDrawerItem = (
    <ListItem
      divider
      button
      component={Link}
      to="/"
      className={classes.drawerItemAuth}
      onClick={() => {
        setOpenDrawer(false);
        props.logout();
      }}
    >
      <ListItemIcon>
        <LockOutlinedIcon className={classes.drawerItemAuthIcon} />
      </ListItemIcon>
      <ListItemText disableTypography className={classes.drawerItemAuthText}>
        Sign Out
      </ListItemText>
    </ListItem>
  );

  const guestDrawerItem = (
    <ListItem
      divider
      button
      component={Link}
      to="/auth"
      className={classes.drawerItemAuth}
      onClick={() => setOpenDrawer(false)}
    >
      <ListItemIcon>
        <LockOpenRoundedIcon className={classes.drawerItemAuthIcon} />
      </ListItemIcon>
      <ListItemText disableTypography className={classes.drawerItemAuthText}>
        Sign In|Up
      </ListItemText>
    </ListItem>
  );

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
      {props.auth.isAuthenticated ? authMainButton : guestMainButton}
      <Menu
        id="recipes-menu"
        anchorEl={anchorEl}
        open={openMenu}
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

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            selected={value === 0}
          >
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={
                value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/why-vegan"
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            selected={value === 1}
          >
            <ListItemIcon>
              <HelpOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={
                value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Why Vegan?
            </ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/recipes"
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            selected={value === 2}
          >
            <ListItemIcon>
              <MenuBookOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={
                value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Recipes
            </ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/forum"
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            selected={value === 3}
          >
            <ListItemIcon>
              <ForumOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={
                value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Forum
            </ListItemText>
          </ListItem>
          {props.auth.isAuthenticated ? authDrawerItem : guestDrawerItem}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.offset} />
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
