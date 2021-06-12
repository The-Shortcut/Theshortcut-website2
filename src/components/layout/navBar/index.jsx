import React, { useState, useEffect } from 'react';

// Children
import Search from './Search';
import DrawerMenu from './DrawerMenu';

// Material-UI
import { AppBar, Toolbar, IconButton, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

// logo
import TopLogo from '../../../assets/logo/shortcut/logo The Shortcut_white on transparent.png';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const NavBar = ({ pageHeight }) => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeMenuIconColor = () => {
    // eslint-disable-next-line no-unused-expressions
    if (path === '/privacy' || path === '/code' || path === '/terms') {
      document.getElementById('menuIcon').style.backgroundColor = '#FFF';
    } else {
      document.getElementById('menuIcon').style.backgroundColor = 'inherit';
    }
  };

  useEffect(() => {
    setPath(window.location.pathname)
    changeMenuIconColor()
  }, [changeMenuIconColor, path])
console.log(path)
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header className={classes.root}>
      <ElevationScroll>
        <AppBar
          position='fixed'
          style={
            pageHeight > 100 ? { backgroundColor: '#434343' } : { backgroundColor: 'transparent' }
          }>
          <Toolbar className={classes.toolBar}>
            <div className={classes.title}>
              <IconButton
                id="menuIcon"
                className={classes.menuButton}
                onClick={toggleMenu}
                color='primary'
                size='medium'
                aria-label='open drawer'>
                <MenuIcon fontSize='large' />
              </IconButton>
              <img src={TopLogo} alt='The Shortcut Logo' className={classes.logo} />
            </div>
            <Search />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <DrawerMenu toggleDrawer={toggleMenu} menuOpen={menuOpen} />
    </header>
  );
};

export default NavBar;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    margin: '1em 8em',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    maxWidth: '8em',
    maxHeight: '3em',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '12em',
      display: 'block',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
}));
