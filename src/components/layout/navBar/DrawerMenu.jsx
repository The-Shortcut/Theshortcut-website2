import React, { useEffect, useState } from 'react';

// Material-UI
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, Divider, List, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

// DATA
import { navBarData } from './navBarData';

// Children
import MenuItem from './MenuItem';

// LOGO
import drawerLogo from '../../../assets/logo/shortcut/Emblem The Shortcut_emblem green.png';
const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      width: 360,
    },
  },
  // necessary for conent to be below app bar
  /* toolbar: theme.mixins.toolbar, */
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '1.5em',
  },
  drawerPaper: {
    width: 360,
    [theme.breakpoints.down('xs')]: {
      width: 240,
    },
  },
  menuIcon: {
    color: theme.palette.primary.main,
    marginRight: '10px',
  },
  logo: {
    maxWidth: '8em',
    maxHeight: '3em',
  },
}));

const DrawerMenu = ({ toggleDrawer, menuOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        setChecked((prev) => !prev);
      }, 100);
    } else {
      setChecked(false);
    }
  }, [menuOpen]);

  const MenuItems = () => {
    return (
      <div role='presentation' onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <div className={classes.toolbar}>
          <img src={drawerLogo} alt='The Shortcut Logo' className={classes.logo} />
          <CloseIcon color='primary' />
        </div>
        <Divider />
        {navBarData.map((item, index) => (
          <Slide key={index} direction='down' in={checked}>
            <List>
              <MenuItem item={item} toggleDrawer={toggleDrawer} />
            </List>
          </Slide>
        ))}
      </div>
    );
  };

  return (
    <Drawer
      className={classes.drawer}
      aria-label='menu_items'
      variant='temporary'
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      open={menuOpen}
      onClose={toggleDrawer}
      classes={{ paper: classes.drawerPaper }}
      ModalProps={{ keepMounted: true }}>
      <MenuItems />
    </Drawer>
  );
};
export default DrawerMenu;
