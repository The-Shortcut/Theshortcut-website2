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
      {/* <div className={classes.mark}>
        <EventAvailableIcon color='primary' style={{ fontSize: '4rem', margin: 'auto' }} />
      </div> */}
      <Title>The Shortcut Events</Title>
      <Typography variant='body1' className={classes.text}>
        The Shortcut organizes many events for entrepreneurs, upskillers, and job seekers.
        Workshops, training programs, talks, webinars, and more are organized to connect you with
        local experts to help you with your professional integration in Finland. All for free!
        <br />
        Here you can search our upcoming events and our past events. The past events that were
        recorded, are also available here.
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
    marginLeft: '25px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      /*  textAlign: 'justify', */
    },
  },
}));
