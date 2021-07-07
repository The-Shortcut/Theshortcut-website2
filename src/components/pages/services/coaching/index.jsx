import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Children
import Title from '../../../custom/Title';
import CoachingSections from './CoachingSections';

const Coaching = ({ coachingRef }) => {
  const classes = useStyles();
  return (
    <section ref={coachingRef} className={classes.root}>
      <div className={classes.intro}>
        <Title>Career Coaching</Title>
        <Typography variant='body1' className={classes.text}>
          Land your next best role through our career coaching. We offer a variety of coaching for
          you to channel your super powers, free of charge. Our partner-based coaching service has
          application requirements, but our other coaching materials and sessions are open to
          everyone. Transform your career now!
        </Typography>
      </div>
      <CoachingSections />
      <div id='training' />
    </section>
  );
};

export default Coaching;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '7em auto',
    [theme.breakpoints.down('sm')]: {
      margin: '1em auto',
    },
  },
  intro: {
    margin: 'auto',
    minWidth: '80%',
    maxWidth: '80%',
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
}));
