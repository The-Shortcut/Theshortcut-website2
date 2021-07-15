import React from 'react';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const SkeletonEvent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.card} style={{ flex: 3, flexBasis: '60%' }}>
        <Skeleton animation='wave' variant='text' height={60} />
        <Skeleton animation='wave' variant='text' />
        <Skeleton animation='wave' variant='rect' height={220} />
        <Skeleton animation='wave' variant='text' height={118} />
        <Skeleton animation='wave' height={50} width='10%' />
      </div>
      <div className={classes.card} style={{ flex: 1, flexBasis: '30%' }}>
        <Skeleton animation='wave' height={60} width='50%' />
        <Skeleton animation='wave' variant='text' height={40} />
        <Skeleton animation='wave' variant='text' height={40} />
        <Skeleton animation='wave' variant='text' height={40} />
        <Skeleton animation='wave' variant='text' height={40} />
        <Skeleton animation='wave' variant='text' height={40} />
        <Skeleton animation='wave' variant='text' height={40} />
        <Skeleton animation='wave' variant='text' height={40} />
        <Skeleton animation='wave' variant='text' height={40} />
      </div>
    </div>
  );
};

export default SkeletonEvent;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    minWidth: '80%',
    maxWidth: '80%',
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  card: {
    minHeight: 600,
    maxHeight: 600,
    margin: '2em auto',
    padding: '40px',
  },
}));
