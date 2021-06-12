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
      <div className={classes.container}>
        {skeletonArr.map((i) => (
          <SkeletonEvent key={i} />
        ))}
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
    <div className={currentItems.length < 3 ? classes.container2 : classes.container}>
      {currentItems.map((event, index) => (
        <div key={index}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventsList;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fill, 380px)',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
  },
  container2: {
    maxWidth: '60%',
    margin:'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
    alignItems: 'center'
  }
}));
