import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import heroImage from '../../../assets/photos/eventsHero2.JPG';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

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

  const allEvRef = useRef(null);
  const byobRef = useRef(null);
  const scrollToAllEv = (ref) => window.scrollTo(0, ref.current.offsetTop - 100);
  const scrollToBoyb = (ref) => window.scrollTo(0, ref.current.offsetTop - 45);
  const executeScrollAllEv = () => scrollToAllEv(allEvRef);
  const executeScrollByob = () => scrollToBoyb(byobRef);

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
      <div className={classes.buttons}>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollAllEv}>
          ALL EVENTS
        </Button>
        <Button variant='contained' color='default' className={classes.button} href='/events/byob'>
          B.Y.O.B
        </Button>
      </div>
      <Subject allEvRef={allEvRef} />
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
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '-3.3em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2.4em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-1.5em',
    },
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '40%',
    margin: '-9em auto 0',
    [theme.breakpoints.down('md')]: {
      maxWidth: '55%',
      margin: '-9em auto 0',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70%',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
  },
  button: {
    display: 'inline',
    minWidth: '11em',
    maxWidth: '11em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('sm')]: {
      minWidth: '12em',
      maxWidth: '12em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '11em',
      maxWidth: '11em',
    },
    textAlign: 'center',
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
