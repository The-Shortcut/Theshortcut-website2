import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const TheModules = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Typography variant='h3' className={classes.title}>
          The Modules
        </Typography>
        <br />
        <br />
        <Typography variant='body1' className={classes.text}>
          Our Academy is organized into four academic modules and coaching sessions. The academic
          modules will run Monday to Thursday and require approximately 4 hour per day of
          commitment. Our full-stack development course is more intensive, and will be running
          Monday to Thursday with 6 hours per day plus additional assignments.
          <br />
          <br />
          Fridays are reserved for coaching sessions, which you can choose based on your needs. You
          may want to participate in some sessions also outside of the timeline of your specific
          learning modules.
          <br />
          <br />
          Depending on the COVID situation, courses will be run in person at our office in Maria 01
          in Helsinki, and/or online.
        </Typography>
      </div>
    </section>
  );
};

export default TheModules;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#FDEFE4',
    padding: theme.spacing(11, 5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Noto Serif Display',
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      fontSize: '1.5rem',
    },
  },
  container: {
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  text: {
    fontFamily: 'Raleway',
    paddingRight: '60px',
    textAlign: 'center',
    padding: 10,
  },
}));
