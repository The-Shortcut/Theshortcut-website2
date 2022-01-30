import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const hardModules = [
  {
    tile: 'Business',
    bgColor: '#6d9695',
  },
  {
    tile: 'Digital marketing',
    bgColor: '#5b8987',
  },
  {
    tile: 'Growth Marketing',
    bgColor: '#497c7a',
  },
  {
    tile: 'Full-stack Development',
    bgColor: '#42706e',
  },
];

const softModules = [
  {
    tile: 'Mentoring',
    bgColor: '#b86b6e',
  },
  {
    tile: 'Emotional Resiliency',
    bgColor: '#ad5659',
  },
  {
    tile: 'Neworking & Self-learning',
    bgColor: '#a34145',
  },
  {
    tile: 'Inspirational Keynotes',
    bgColor: '#992c30',
  },
];

const ModulesSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Typography variant='h3'>One Academy - Many Options</Typography>
        <Grid container></Grid>
      </div>
    </section>
  );
};

export default ModulesSection;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#FDEFE4',
    padding: theme.spacing(11, 5),
  },
  container: {
    margin: 'auto',
    maxWidth: '80%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'strech',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '90%',
    },
  },
}));
