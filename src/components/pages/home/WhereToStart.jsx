import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

//Icon
import startHere from '../../../assets/illustrations/2.png';

// Children
import Title from '../../custom/Title';
import StartHereBtn from './StartHereBtn';

const WhereToStart = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title>Unsure Where to Start?</Title>
      <section className={classes.section}>
        <img src={startHere} className={classes.icon} alt='start-here' />
        <div className={classes.content}>
          <Typography variant='body1' className={classes.text}>
            Take our quick questionnaire to provide you with the most important info for where you
            are in your immigration journey. No matter if you’re unemployed, want to start a
            business, or are just looking to grow your network, we have you covered with simple
            guides for the Finnish job market.
          </Typography>
        </div>
      </section>
      <StartHereBtn />
    </div>
  );
};

export default WhereToStart;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    margin: '5em auto 10em',
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
  },
  section: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  icon: {
    maxWidth: '20vw',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  content: {
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      maxWidth: '90%',
      margin: '0 auto 2em',
    },
  },
}));
