import React, { useRef } from 'react';

// META TAG
import MetaTag from '../../utils/MetaTag';

// Hero Image
import heroImage from '../../../assets/photos/home_hero.jpg';

//Materail-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Link } from '@material-ui/core';

// Children
import UpcomingEvents from './UpcomingEvents';
import GetInTheGame from './GetInTheGame';
import OurPartnersLogos from '../../custom/OurPartnersLogos';
import WhereToStart from './WhereToStart';

import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'home',
    path: '/',
  },
});

const LandingPage = () => {
  const classes = useStyles();

  const gamesRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 90);
  const executeScroll = () => scrollToRef(gamesRef);

  return (
    <div>
      <MetaTag
        title='Home | The Shortcut'
        description='The Shortcut is an impact-driven organization that trains and equips community members to build meaningful careers in Finland. Transform your career today.'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/homepage-2.png'
      />
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
            <Button variant='contained' color='default' className={classes.button}>
              COLLABORATE WITH US
            </Button>
          </Link>
        </div>
      </div>
      <GetInTheGame gamesRef={gamesRef} />
      <UpcomingEvents />
      <WhereToStart />
      <div style={{ background: '#DDDDDD', border: '2px solid #DDDDDD', marginBottom:'-4em'}}>
        <OurPartnersLogos />
      </div>
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
    minWidth: '4em',

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
    minWidth: '45%',
    maxWidth: '45%',
    margin: '6em auto 0',
    [theme.breakpoints.down('md')]: {
      minWidth: '60%',
      maxWidth: '60%',
      margin: '5em auto 0',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '55%',
      maxWidth: '55%',
      margin: '4em auto 0',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      minWidth: '60%',
      maxWidth: '60%',
    },
  },
  button: {
    display: 'inline',
    minWidth: '14em',
    maxWidth: '14em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('sm')]: {
      minWidth: '14.5em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '15.5em',
    },
  },
}));
