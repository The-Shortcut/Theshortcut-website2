import React, { useEffect } from 'react';

// DATA
import { partnersStat } from './partnersData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getStatsData } from '../../../actions/statActions';

const PartnersStatistics = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { partnersStats } = useSelector((state) => state.stats);

  useEffect(() => {
    dispatch(getStatsData());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      {partnersStats?.map(({ acf }, index) => (
        <div key={index} className={classes.container}>
          <div className={classes.icon}>
            <div
              style={{ fontSize: 30, color: '#FFFFFF' }}
              dangerouslySetInnerHTML={{ __html: acf.icon }}
            />
          </div>
          <Typography variant='h4'>{acf.value}</Typography>
          <Typography variant='subtitle1'>{acf.title}</Typography>
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
    margin: '4em auto 1.5em',
    [theme.breakpoints.down('xs')]: {
      margin: '2em auto',
    },
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
      marginTop: 20,
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
