import React from 'react';
import { PopupButton } from '@typeform/embed-react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const StartHereBtn = () => {
  const classes = useStyles();

  return (
    <PopupButton id='YiWWH3I6' className={classes.container}>
      <Button color='primary' variant='contained' className={classes.button}>
        START HERE
      </Button>
    </PopupButton>
  );
};

export default StartHereBtn;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    background: 'none',
    margin: '-2em auto 2em',
    [theme.breakpoints.up('lg')]: {
      marginTop: '-5em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1em',
    },
  },

  button: {
    minWidth: '13.5em',
    maxWidth: '13.5em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      minWidth: '14.5em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '15.5em',
    },
    color: '#fff',
  },
}));
