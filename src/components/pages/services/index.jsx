import React, { useRef, useEffect } from 'react';

// Meta Tag
import MetaTag from '../../utils/MetaTag';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getServicesFAQ } from '../../../actions/docActions';

// HERO IMAGE
import heroImage from '../../../assets/photos/servicesHero2.JPG';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

// CHILDREN
import Training from './training';
import Coaching from './coaching';
import ServicesFAQ from './ServicesFAQ';

const Services = () => {
  const classes = useStyles();

  const coachingRef = useRef(null);
  const trainingRef = useRef(null);
  const faqRef = useRef(null);
  const scrollToRefC = (ref) => window.scrollTo(0, ref.current.offsetTop - 130);
  const scrollToRefT = (ref) => window.scrollTo(0, ref.current.offsetTop - 30);
  const scrollToRefFAQ = (ref) => window.scrollTo(0, ref.current.offsetTop - 100);
  const executeScrollCoaching = () => scrollToRefC(coachingRef);
  const executeScrollTraining = () => scrollToRefT(trainingRef);
  const executeScrollFAQ = () => scrollToRefFAQ(faqRef);

  const { servicesFaqLoaded, coachingFAQ, trainingFAQ } = useSelector((state) => state.docs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesFAQ());
  }, [dispatch]);
  console.log({ servicesFaqLoaded, coachingFAQ, trainingFAQ });
  return (
    <div>
      <MetaTag
        title='Our Services | The Shortcut'
        description='Want to upskill or transform your career? Learn more about events, coaching, and training opportunities at The Shortcut here.'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/services.png'
      />
      {window.innerWidth < 960 ? (
        <img
          src={heroImage}
          width='100%'
          height='auto'
          alt='our sevices-page'
          style={{ filter: 'brightness(40%)' }}
        />
      ) : (
        <div className={classes.hero} />
      )}
      <div className={classes.wrapper}>
        <Typography variant='h1' className={classes.title}>
          Our Services
        </Typography>
        <div className={classes.buttons}>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={executeScrollCoaching}>
            COACHING
          </Button>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={executeScrollTraining}>
            TRAINING
          </Button>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={executeScrollFAQ}>
            FAQ
          </Button>
        </div>
      </div>
      <div className={classes.loc} id='coaching' />
      <Coaching coachingRef={coachingRef} />
      <Training trainingRef={trainingRef} />
      <ServicesFAQ
        servicesFaqLoaded={servicesFaqLoaded}
        coachingFAQ={coachingFAQ}
        trainingFAQ={trainingFAQ}
        faqRef={faqRef}
      />
    </div>
  );
};

export default Services;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
    zIndex: -1,
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
    marginTop: '-5.2em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-4em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-2.5em',
    },
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minWidth: '60%',
    maxWidth: '60%',
    margin: '-12em auto 0',
    [theme.breakpoints.only('md')]: {
      minWidth: '80%',
      maxWidth: '80%',
      marginTop: '-9.5em',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '60%',
      maxWidth: '60%',
      marginTop: '-8em',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '95%',
      maxWidth: '95%',
      marginTop: 0,
    },
  },
  button: {
    display: 'inline',
    minWidth: '9em',
    maxWidth: '9em',
    color: '#FFFFFF',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('sm')]: {
      minWidth: '8em',
      maxWidth: '8em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '8em',
      maxWidth: '8em',
    },
  },
  loc: {
    minWidth: '100%',
    minHeight: '2.2em',
    backgroundColor: '#f9f9f9',
  },
}));
