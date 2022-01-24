import React, { useEffect } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getStatsData } from '../../../actions/statActions';

const Statistics = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { communityStats } = useSelector((state) => state.stats);

  useEffect(() => {
    dispatch(getStatsData());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      {communityStats?.map(({ acf }, index) => (
        <div key={index} className={classes.container}>
          <div className={classes.icon}>
            <div
              style={{ fontSize: 30, color: '#FFFFFF' }}
              dangerouslySetInnerHTML={{ __html: acf.icon }}
            />
          </div>
          <div className={classes.values}>
            <Typography variant='h5'>{acf.value}</Typography>
            <Typography variant='subtitle1'>{acf.title}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80%',
    margin: 'auto',
    minHeight: '7em',
    marginTop: theme.spacing(5),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexBasis: '22%',
    margin: '1em auto',
    [theme.breakpoints.down('xs')]: {
      flexBasis: '40%',
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
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  values: {
    margin: 'auto 0.5em',
  },
}));
