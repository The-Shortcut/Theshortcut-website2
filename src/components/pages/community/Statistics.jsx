import React from 'react';

import { statData } from './statData';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const Statistics = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {statData.map((item, index) => (
        <div key={index} className={classes.container}>
          <div className={classes.icon}>{item.icon}</div>
          <div className={classes.values}>
            <Typography variant='h5'>{item.amount}</Typography>
            <Typography variant='subtitle1'>{item.title}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '7em',
    marginTop: theme.spacing(5),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '160px',
      display: 'grid',
      gridGap: '10px',
      gridTemplateColumns: '140px 35%',
      justifyContent: 'center',
      alignContent: 'center',
    },
  },
  container: {
    display: 'flex',
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
   /*  [theme.breakpoints.down('xs')]: {
      background: 'none',
      border: 'none',
      boxShadow: 'none',
      color: theme.palette.primary.main,
    }, */
    border: '1px solid #888',
    borderRadius: '50%',
    boxShadow: ' 0px 0px 22px -5px #434343',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  values: {
    margin: 'auto 0.5em',
  },
}));
