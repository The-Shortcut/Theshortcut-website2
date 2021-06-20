import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// CHILDREN
import Title from '../../../custom/Title';
import TrainingSections from './trainingSections';

const Training = ({ trainingRef }) => {
  const classes = useStyles();

  return (
    <section ref={trainingRef} className={classes.root} id='training'>
      <div style={{ marginTop: '7em' }}>
        <Title>TRAINING</Title>
        <Typography variant='body1' className={classes.text}>
          <strong>Current opportunities</strong>
          <br />
          "Sorry, there are no training opportunities taking applications at the moment"
        </Typography>
        <TrainingSections />
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
    margin: 'auto',
    minWidth: '50%',
    maxWidth: '50%',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      minWidth: '80%',
      maxWidth: '80%',
    },
  },
}));
