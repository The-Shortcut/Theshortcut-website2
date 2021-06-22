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
    <section ref={coachingRef} className={classes.intro}>
      <Title>Career Coaching</Title>
      <Typography variant='body1' className={classes.text}>
        Many of our career coaching services are open to all and available free for everyone to
        utilize. These include pre-recorded material, live events, and self-directed learning and
        work. Our Työ-SIB program is limited access.
      </Typography>
      <CoachingSections />
      <div id='training' />
    </section>
  );
};

export default Coaching;

const useStyles = makeStyles((theme) => ({
  intro: {
    margin: '7em 1em',
  },
  text: {
    margin: 'auto',
    minWidth: '50%',
    maxWidth: '50%',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
  },
}));
