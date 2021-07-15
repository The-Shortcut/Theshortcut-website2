import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
/* import EventAvailableIcon from '@material-ui/icons/EventAvailable'; */

import Title from '../../custom/Title';

const Subject = ({ allEvRef }) => {
  const classes = useStyles();
  return (
    <div ref={allEvRef} className={classes.root}>
      <Title>The Shortcut Events</Title>
      <Typography variant='body1' className={classes.text}>
        Learn for your future. We organize workshops, talks and webinars for you entrepreneurs,
        upskillers, and job seekers. Here you can search our upcoming events and recordings of our
        past events. <br />
        Explore and learn from experts now! Our events are open to everyone and free of charge.
        <br />
        Looking for in-depth learning experience? Check our current training programs <a href="/services/#training">here</a>.
      </Typography>
    </div>
  );
};

export default Subject;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    margin: '7em auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
    },
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
    },
    /*  [theme.breakpoints.down('md')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
      margin: '2em auto',
      alignItems: 'flex-start',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    }, */
  },
  mark: {
    borderRadius: '50%',
    minWidth: '120px',
    maxWidth: '120px',
    minHeight: '120px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '90px',
      maxWidth: '90px',
      minHeight: '90px',
    },
    boxShadow: '1px 3px 20px 5px rgba(0,0,0,0.71)',
    textAlign: 'center',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      float: 'left',
      marginRight: '10px',
    },
  },
  text: {
    margin: 'auto',
    textAlign: 'center',
    maxWidth: '80%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      /*  textAlign: 'justify', */
    },
  },
}));
