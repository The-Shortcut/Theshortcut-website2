import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';

// Children
import Intro from './Intro';
import Links from './Links';

const Index = () => {
  const classes = useStyles();
  return (
      <footer className={classes.footer} style={window.location.pathname === '/start-here' ? {display:'none'} : {display: 'block'}}>
        <div className={classes.container}>
          <Intro />
          <Links />
        </div>
        <Divider style={{ margin: '1em auto' }} />
        <div className={classes.copyright}>
          <Typography variant='body2' style={{ margin: '1em auto' }}>
            Copyright <strong>&copy;</strong> 2021 The Shortcut. All
            rights reserved.
          </Typography>
        </div>
      </footer>
  );
};

export default Index;

const useStyles = makeStyles((theme) => ({
  footer: {
    minWidth: '100%',
    height: 'auto',
    background: theme.palette.secondary.main,
  },
  container: {
    margin: 'auto',
    paddingTop: '2em',
    maxWidth: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  copyright: {
    color: '#DDDDDD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
