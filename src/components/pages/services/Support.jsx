import React from 'react';

import Title from '../../custom/Title';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const Support = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Title>Looking for 1-on-1 support?</Title>
      <Typography variant='body1' className={classes.text}>
        We offer free calls for our community members every week. You can book an online meeting
        with one of our team members. Every person has their own areas of expertise they can talk to
        you about!
      </Typography>
      <Button href='/meet-us' color='primary' variant='contained' className={classes.btn}>
        Book a Meeting
      </Button>
    </section>
  );
};

export default Support;

const useStyles = makeStyles((theme) => ({
  section: {
    maxWidth: '80%',
    margin: '5em auto 7em',
    border: '1px solid #f9f9f9',
    [theme.breakpoints.down('sm')]: {
      margin: '3.5em auto',
    },
  },
  text: {
    margin: 'auto',
    minWidth: '80%',
    maxWidth: '80%',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
  },
    btn: {
      display: 'flex',
        minWidth: '9em',
    maxWidth: '9em',
    color: '#FFFFFF',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em auto',
  },
}));
