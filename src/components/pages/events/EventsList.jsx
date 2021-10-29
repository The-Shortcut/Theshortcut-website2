import React, { useEffect } from 'react';

import noMatched from '../../../assets/illustrations/1.png';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { allEvents, paginate } from '../../../actions/eventActions';
import EventCard from '../../custom/EventCard';

// Children
import SkeletonEvent from '../../functional/SkeletonEvent';

const EventsList = () => {
  const classes = useStyles();
  const { isLoading, currentPage, currentItems } = useSelector((state) => state.events);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(allEvents());
    } else {
      dispatch(paginate(currentPage));
    }
  }, [currentPage, dispatch, isLoading]);

  let skeletonArr = window.innerWidth < 770 ? [1] : [1, 2, 3];
  if (isLoading) {
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          {skeletonArr.map((i) => (
            <SkeletonEvent key={i} />
          ))}
        </div>
      </div>
    );
  } else if (currentItems.length === 0) {
    return (
      <div className={classes.noMatched}>
        <h4>No matching events...</h4>
        <img src={noMatched} alt='not matched' width='100%' />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {currentItems.map((event, index) => (
          <div key={index}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '70%',
    maxWidth: '70%',
    [theme.breakpoints.down('md')]: {
      minWidth: '80%',
      maxWidth: '80%',
    },
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
    margin: 'auto',
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    margin: 'auto',
  },
  noMatched: {
    minWidth: 335,
    maxWidth: 335,
    minHeight: 400,
    maxHeight: 400,
    border: '1px solid #434343',
    borderRadius: '10px',
    margin: '2em auto',
    [theme.breakpoints.up('md')]: {
      minWidth: 360,
      maxWidth: 360,
      margin: '1em auto',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
