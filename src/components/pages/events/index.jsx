import React from 'react';

import heroImage from '../../../assets/photos/eventsHero2.JPG';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// REDUX
import { useSelector } from 'react-redux';

// Children
import Subject from './Subject';
import SearchEvents from './SearchEvents';
import EventsList from './EventsList';
import PaginationOutlined from '../../functional/Pagination';

const AllEvents = () => {
  const classes = useStyles();
  const { isLoading, filteredEvents } = useSelector((state) => state.events);

  return (
    <div>
      {window.innerWidth < 960 ? (
        <img
          src={heroImage}
          width='100%'
          height='auto'
          alt='contact-page'
          style={{ filter: 'brightness(40%)' }}
        />
      ) : (
        <div className={classes.hero} />
      )}
      <Typography variant='h1' className={classes.title}>
        Events
      </Typography>
      <Subject />
      <SearchEvents />
      {!isLoading && filteredEvents?.length > 10 && <PaginationOutlined />}
      <EventsList />
      {!isLoading && filteredEvents?.length > 10 && <PaginationOutlined />}
      <Typography variant='subtitle1' component='p' className={classes.text}>
        If you didn’t find the kind of event you were looking for or you have an idea for an event,
        then contact us at <a href='mailto:info@theshortcut.org'>info@theshortcut.org</a>
      </Typography>
    </div>
  );
};

export default AllEvents;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
  title: {
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    maxWidth: '80%',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '-5.2em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2em',
    },
  },
  text: {
    textAlign: 'center',
    fontSize: '1rem',
    margin: '1em',
    minWidth: '80%',
    maxWidth: '80%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
  },
}));
