import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// CHILDREN
import Title from '../../../custom/Title';
import TrainingSections from './trainingSections';

const Training = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id='training'>
      <Title>TRAINING</Title>
      <Typography variant='body1' className={classes.text}>
        <strong>Current opportunities</strong>
        <br />
        "Sorry, there are no training opportunities taking applications at the moment"
      </Typography>
      <TrainingSections />
    </div>
  );
};

export default Training;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '11em auto',
    background: '#DDDDDD',
    border: '1px solid #DDD',
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
