import React from 'react';

import heroImage from '../../../assets/photos/eventsHero.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

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
      <Subject />
      <SearchEvents />
      {!isLoading && filteredEvents?.length > 10 && <PaginationOutlined />}
      <EventsList />
      {!isLoading && filteredEvents?.length > 10 && <PaginationOutlined />}
    </div>
  );
};

export default AllEvents;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '70vh',
    maxHeight: '70vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
}));
