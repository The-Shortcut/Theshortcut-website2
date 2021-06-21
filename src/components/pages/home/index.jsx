import React, { useRef } from 'react';

// image
import heroImage from '../../../assets/photos/home_hero.jpg';

//Materail-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Link } from '@material-ui/core';

// Children
import UpcomingEvents from './UpcomingEvents';
import GetInTheGame from './GetInTheGame';
import OurPartnersLogos from '../../custom/OurPartnersLogos';

const LandingPage = () => {
  const classes = useStyles();

  const gamesRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 120);
  const executeScroll = () => scrollToRef(gamesRef);

  return (
    <div>
      <div>
        <img src={heroImage} alt='home_hero_image' className={classes.hero} />
        <div className={classes.title}>
          <Typography variant='h1'>The Shortcut</Typography>
          <Typography variant='h2'>
            The place for social and professional integration in Finland
          </Typography>
        </div>
        <div className={classes.buttons}>
          {/* <Link href='#games' style={{ textDecoration: 'none' }}> */}
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={executeScroll}>
            FOR INDIVIDUALS
          </Button>
          {/* </Link> */}
          <Link href='/partners' style={{ textDecoration: 'none' }}>
            <Button variant='contained' size='large' color='default' className={classes.button}>
              COLLABORATE WITH US
            </Button>
          </Link>
        </div>
      </div>
      <GetInTheGame gamesRef={gamesRef} />
      <UpcomingEvents />
      <OurPartnersLogos />
    </div>
  );
};

export default LandingPage;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
  },
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    [theme.breakpoints.down('xs')]: {
      minHeight: '40em',
      maxHeight: '40em',
    },
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    margin: '-30em 11em 0',
   /*  [theme.breakpoints.up('md')]: {
      margin: '-30em 10em 0',
    }, */
    [theme.breakpoints.down('sm')]: {
      margin: '-28em 3em 0',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '-24em 1em 0',
    },
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '40%',
    margin: '6em auto 0',
    [theme.breakpoints.only('md')]: {
      maxWidth: '55%',
      margin: '5em auto 0',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '50%',
      margin: '4em auto 0',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      
    },
  },
  button: {
    display: 'inline',
    width: '12.5em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('sm')]: {
      minWidth: '14.5em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    /*  [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
    }, */
  },
}));
