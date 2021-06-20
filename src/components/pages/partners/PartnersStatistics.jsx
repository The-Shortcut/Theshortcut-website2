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
          <div className={classes.icon}>{stat.icon}</div>
          <Typography variant='h4'>{stat.title}</Typography>
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
    margin: '1em auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  container: {
    /* border: '1px solid green', */
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexBasis: '22%',
    [theme.breakpoints.down('xs')]: {
      flexBasis: '40%',
      marginTop: '1em',
    },
  },
  icon: {
    minWidth: 70,
    maxWidth: 70,
    minHeight: 70,
    maxHeight: 70,
    [theme.breakpoints.down('sm')]: {
      minWidth: 60,
      maxWidth: 60,
      minHeight: 60,
      maxHeight: 60,
    },
    border: '1px solid #888',
    borderRadius: '50%',
    boxShadow: ' 0px 0px 22px -5px #434343',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
