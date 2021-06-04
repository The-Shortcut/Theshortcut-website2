import React from 'react';

// DATA
import { partnersStat } from './partnersData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const PartnersStatistics = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {partnersStat.map((stat, index) => (
        <div key={index} className={classes.container}>
          <div>{stat.icon}</div>
          <Typography variant='h6'>{stat.title}</Typography>
          <Typography variant='subtitle1'>{stat.description}</Typography>
        </div>
      ))}
    </div>
  );
};

export default PartnersStatistics;

const useStyles = makeStyles((theme) => ({
  root: {
    /* border: '2px solid red', */
    maxWidth: '80%',
    margin: '1em auto 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  container: {
    /* border: '1px solid green', */
    textAlign: 'center',
    flexBasis: '22%',
    [theme.breakpoints.down('xs')]: {
      flexBasis: '40%',
      marginTop: '1em',
    },
  },
}));
