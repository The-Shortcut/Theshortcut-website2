import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// CHILDREN
import Title from '../../../custom/Title';
import CurrTrainingSections from './CurrTrainingSections';
import PrevTrainingSections from './PrevTrainingSections';

const Training = ({ trainingRef }) => {
  const classes = useStyles();

  return (
    <section ref={trainingRef} className={classes.root} id='training'>
      <div style={{ marginTop: '7em' }}>
        <Title>Training</Title>
        <Typography variant='body1' className={classes.text}>
          In collaboration with our partners, we offer training for you to upskill and transform
          your career. These programs require an application and are free of charge.
        </Typography>
        <CurrTrainingSections />
        <PrevTrainingSections />
      </div>
    </section>
  );
};

export default Training;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    background: '#DDDDDD',
    border: '1px solid #DDDDDD',
  },
  text: {
    margin: '2em auto',
    minWidth: '80%',
    maxWidth: '80%',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
  },
}));
