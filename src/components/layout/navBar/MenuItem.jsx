import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Slide, ListItem, ListItemText, Typography, Button } from '@material-ui/core';

const MenuItem = ({ item, toggleDrawer }) => {
  const [subnav, setSubnav] = useState(false);
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (subnav) {
      setTimeout(() => {
        setChecked((prev) => !prev);
      }, 100);
    } else {
      setChecked(false);
    }
  }, [subnav]);
  const handleClick = () => {
    setSubnav((prev) => !prev);
    toggleDrawer();
  };

  return (
    <Fragment>
      <Link
        to={(item.mainPath && subnav) ? item.mainPath : item.path}
        style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}
        onClick={item.subNav && handleClick}>
        <ListItem button className={classes.listItem}>
          <ListItemText
            primary={
              <Typography variant='body1' style={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>
            }
          />
          <div>{item.subNav && subnav ? item.icon : item.subNav ? item.iconClosed : null}</div>
        </ListItem>
      </Link>
      {subnav &&
        item.subNav.map((nav, index) => (
          <Button href={nav.path} key={index} style={{ minWidth: '100%' }}>
            <Slide direction='right' in={checked} mountOnEnter unmountOnExit>
              <ListItem button className={classes.subItem}>
                <ListItemText primary={<Typography variant='subtitle1'>{nav.title}</Typography>} />
              </ListItem>
            </Slide>
          </Button>
        ))}
    </Fragment>
  );
};

export default MenuItem;

const useStyles = makeStyles((theme) => ({
  listItem: {
    color: '#434343',
    margin: 0,
    padding: '0 3em',
  },
  subItem: {
    color: '#434343',
    margin: 0,
    padding: ' 0 4em',
  },
}));
