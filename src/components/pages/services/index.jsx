import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  const scrollToRefC = (ref) => window.scrollTo(0, ref.current.offsetTop - 130);
  const scrollToRefT = (ref) => window.scrollTo(0, ref.current.offsetTop - 30);
  const executeScrollCoaching = () => scrollToRefC(coachingRef);
  const executeScrollTraining = () => scrollToRefT(trainingRef);

  const { servicesFaqLoaded, coachingFAQ, trainingFAQ } = useSelector((state) => state.docs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesFAQ());
  }, [dispatch]);
  console.log({ servicesFaqLoaded, coachingFAQ, trainingFAQ });
  return (
    <div>
      {window.innerWidth < 960 ? (
        <img
          src={heroImage}
          width='100%'
          height='auto'
          alt='about-page'
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
          {/* <Link href='#games' style={{ textDecoration: 'none' }}> */}
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={executeScrollCoaching}>
            COACHING
          </Button>
          {/* </Link> */}
          <Link href='/partners' style={{ textDecoration: 'none' }}>
            <Button
              variant='contained'
              size='large'
              color='default'
              className={classes.button}
              onClick={executeScrollTraining}>
              TRAINING
            </Button>
          </Link>
        </div>
      </div>
      <div className={classes.loc} id='coaching' />
      <Coaching coachingRef={coachingRef} />
      <Training trainingRef={trainingRef} />
      <ServicesFAQ
        servicesFaqLoaded={servicesFaqLoaded}
        coachingFAQ={coachingFAQ}
        trainingFAQ={trainingFAQ}
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    maxWidth: '80%',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '-9em',
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: '-5em',
    },
    '@media (max-width:360px)': {
      marginTop: '-4em',
    },
    /*     border: '2px solid red', */
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minWidth: '40%',
    maxWidth: '40%',
    margin: '-10em auto 0',
    [theme.breakpoints.only('md')]: {
      minWidth: '50%',
      maxWidth: '50%',
      margin: '-8em auto 0',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '60%',
      maxWidth: '60%',
      margin: '-6em auto 0',
    },
    [theme.breakpoints.down('xs')]: {
      /* justifyContent: 'center', */
      marginTop: '-5em',
      minWidth: '75%',
      maxWidth: '75%',
    },
    /*     border: '1px solid green', */
  },
  button: {
    display: 'inline',
    width: '11em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('sm')]: {
      width: '14em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      width: '9em',
      margin: 0,
    },
  },
  loc: {
    minWidth: '100%',
    minHeight: '2.2em',
    backgroundColor: '#f9f9f9',
  },
}));
