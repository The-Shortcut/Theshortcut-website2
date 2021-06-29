import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';

// META TAG
import MetaTag from '../../utils/MetaTag';
// Image
import heroImage from '../../../assets/photos/aboutHero2.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// Children
import AboutUs from './AboutUs';
import CoreValues from './CoreValues';
import Team from './Team';
import Board from './Board';

// GTM
import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'about',
    path: '/about',
  },
});

const About = () => {
  const classes = useStyles();

  

  const aboutusRef = useRef(null);
  const coreValuesRef = useRef(null);
  const teamRef = useRef(null);
  const boardRef = useRef(null);
  const scrollToRefAbout = (ref) => window.scrollTo(0, ref.current.offsetTop - 90);
  const scrollToRefCoreValues = (ref) => window.scrollTo(0, ref.current.offsetTop - 35);
  const scrollToRefTeam = (ref) => window.scrollTo(0, ref.current.offsetTop - 120);
  const scrollToRefBoard = (ref) => window.scrollTo(0, ref.current.offsetTop - 120);
  const executeScrollToAbout = () => scrollToRefAbout(aboutusRef);
  const executeScrollToValues = () => scrollToRefCoreValues(coreValuesRef);
  const executeScrollToTeam = () => scrollToRefTeam(teamRef);
  const executeScrollToBoard = () => scrollToRefBoard(boardRef);
  
  if (window.location.pathname !== '/about') {
    return <Redirect to='/404'/>
  }
  return (
    <div>
      <MetaTag
        title='About-Us | The Shortcut'
        description='Practical and impact-driven, The Shortcut offers training, events and mentoring for international professionals to build meaningful careers in Finland.'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/about-us.png'
      />
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
      <Typography variant='h1' className={classes.title}>
        About Us
      </Typography>
      <div className={classes.buttons}>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollToAbout}>
          ABOUT US
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollToValues}>
          CORE VALUES
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollToTeam}>
          OUR TEAM
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollToBoard}>
          OUR BOARD
        </Button>
      </div>
      {/* <div className={classes.loc} id='aboutUs' /> */}
      <AboutUs aboutusRef={aboutusRef} />
      <CoreValues coreValuesRef={coreValuesRef} />
      {/* <SuccessStories /> */}
      {/* <FAQ /> */}
      <Team teamRef={teamRef} />
      <Board boardRef={boardRef} />
    </div>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
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
    marginTop: '-3.3em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2.4em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-1.5em',
    },
  },
  loc: {
    minWidth: '100%',
    minHeight: '2.2em',
    background: '#f9f9f9',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minWidth: '60%',
    maxWidth: '60%',
    margin: '-9em auto 0',
    [theme.breakpoints.only('md')]: {
      minWidth: '80%',
      maxWidth: '80%',
      marginTop: '-8em',
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
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '6.8em',
      maxWidth: '6.8em',
    },
  },
}));
