import React, { useEffect } from 'react';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { allEvents } from '../../../actions/eventActions';

//Children
import Title from '../../custom/Title';
import EventCard from '../../custom/EventCard';
import SingleEventCard from '../../custom/SingleEventCard';
import SkeletonEvent from '../../functional/SkeletonEvent';

const UpcomingEvents = () => {
  const classes = useStyles();
  const events = useSelector((state) => state.events.allEvents);
  const { isLoading } = useSelector((state) => state.events);

  let upcoming = events?.filter((event) => event.status === 'upcoming');
  if (upcoming?.length < 1) {
    upcoming = events.slice(0, 1);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allEvents());
  }, [dispatch]);

  let arr = window.innerWidth < 770 ? [1] : [1, 2, 3];
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Title>Upcoming Events</Title>
        {isLoading ? (
          <div className={classes.skeleton}>
            {arr.map((i) => (
              <SkeletonEvent key={i} />
            ))}
          </div>
        ) : (
          <div
            className={
              upcoming?.length < 3
                ? classes.singleEvent
                : upcoming?.length > 1 && window.innerWidth > 1240
                ? classes.events
                : window.innerWidth < 960
                ? classes.eventsXS
                : classes.eventsSM
            }>
            {upcoming
              ? upcoming.length < 3 && window.innerWidth > 960
                ? upcoming.map((ev) => (
                    <div key={ev.id} className={classes.event}>
                      <SingleEventCard event={ev} />
                    </div>
                  ))
                : upcoming.map((ev) => (
                    <div key={ev.id} className={classes.event}>
                      <EventCard event={ev} />
                    </div>
                  ))
              : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;

const useStyles = makeStyles((theme) => ({
  main: {
    background: '#DDDDDD',
    border: '2px solid #DDDDDD',
  },
  root: {
    margin: '7em auto',
    maxWidth: '80%',
    [theme.breakpoints.only('md')]: {
      marginTop: '18em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '10em',
      maxWidth: '90%',
    },
  },
  skeleton: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleEvent: {
    margin: 'auto',
  },
  events: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fill, 380px)',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
  },
  eventsSM: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
  },
  eventsXS: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
  },
  event: {
    display: 'grid',
  },
}));
