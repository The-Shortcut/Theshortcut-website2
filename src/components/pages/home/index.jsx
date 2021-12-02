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
      {window.innerWidth < 960 ? (
        <img
          src={heroImage}
          width='100%'
          height='auto'
          alt='home-page'
          style={{ filter: 'brightness(40%)' }}
        />
      ) : (
        <div className={classes.hero} />
      )}
      <div>
        {/* <img src={heroImage} alt='home_hero_image' className={classes.hero} /> */}
        <div className={classes.title}>
          <Typography variant='h1'>The Shortcut</Typography>
          <Typography variant='h2'>
            The place for social and professional integration in Finland.
          </Typography>
        </div>
        <div className={classes.buttons}>
          {/* <Link href='#games' style={{ textDecoration: 'none' }}> */}
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={executeScroll}>
            For Jobseekers
          </Button>
          {/* </Link> */}
          <Link href='/partners' style={{ textDecoration: 'none' }}>
            <Button variant='contained' color='primary' className={classes.button}>
              For Partners
            </Button>
          </Link>
          <Link href='/for-media' style={{ textDecoration: 'none' }}>
            <Button variant='contained' color='primary' className={classes.button}>
              For Media
            </Button>
          </Link>
        </div>
      </div>
      <GetInTheGame gamesRef={gamesRef} />
      <UpcomingEvents />
      <WhereToStart />
      <div style={{ background: '#DDDDDD', border: '2px solid #DDDDDD', marginBottom: '-4em' }}>
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
    position: 'relative',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage}) center/cover fixed no-repeat`,
    zIndex: -1,
  },
  /*  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    [theme.breakpoints.down('xs')]: {
      minHeight: '40em',
      maxHeight: '40em',
    },
    objectFit: 'cover',
    filter: 'brightness(60%)',
  }, */
  title: {
    minWidth: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '-14em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-10em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-9.5em',
    },
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minWidth: '60%',
    maxWidth: '60%',
    margin: '-9.5em auto 5em',
    [theme.breakpoints.down('md')]: {
      minWidth: '70%',
      maxWidth: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      maxWidth: '90%',
      marginTop: 0,
    },
  },
  button: {
    color: '#FFFFFF',
    display: 'inline',
    minWidth: '13em',
    maxWidth: '13em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('md')]: {
      minWidth: '12em',
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '11em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '8em',
    },
  },
}));
