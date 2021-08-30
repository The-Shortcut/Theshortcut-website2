import React from 'react';
import { Widget, PopupButton, SliderButton, Popover, Sidetab } from '@typeform/embed-react';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// ICON
import { MdHelp } from 'react-icons/md';

const StartHere = () => {
  const classes = useStyles();

  return (
    <PopupButton id='YiWWH3I6' className={classes.container}>
      <Button color='primary' variant='contained' endIcon={<MdHelp />} className={classes.button}>
        How can we help
      </Button>
    </PopupButton>
  );
  /*  return <Widget id='YiWWH3I6' style={{ width: '100%', height: '1200px' }} className='my-form' />; */
};

export default StartHere;

const useStyles = makeStyles((theme) => ({
  form: {
    minWidth: '100vw',
    minheight: '100vh',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    background: 'none',
    margin: '1em auto 2em',
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
   
  },
}));
