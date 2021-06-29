import React, { useRef } from 'react';

// META TAG
import MetaTag from '../../utils/MetaTag';
// Hero Image
import heroImage from '../../../assets/photos/communityHero.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// Children
import Statistics from './Statistics';
import MainSections from './MainSections';
import SuccessStories from './SuccessStories';

// GTM
import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'community',
    path: '/community',
  },
});

const Community = () => {
  const classes = useStyles();

  const welcomeRef = useRef(null);
  const storyRef = useRef(null);
  const scrollToWelcome = (ref) => window.scrollTo(0, ref.current.offsetTop - 45);
  const scrollToStrories = (ref) => window.scrollTo(0, ref.current.offsetTop - 45);
  const executeScrollWelcome = () => scrollToWelcome(welcomeRef);
  const executeScrollStories = () => scrollToStrories(storyRef);

  return (
    <div>
      <MetaTag
        title='Community | The Shortcut'
        description='The Shortcut is a diverse community of learners in Finland. Whether you want to network or transform your career, join us today.'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/community.png'
      />
      {window.innerWidth < 960 ? (
        <img
          src={heroImage}
          width='100%'
          height='auto'
          alt='community-page'
          style={{ filter: 'brightness(40%)' }}
        />
      ) : (
        <div className={classes.hero} />
      )}
      <Typography variant='h1' className={classes.title}>
        Our Community
      </Typography>
      <div className={classes.buttons}>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollWelcome}>
          WELCOME
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollStories}>
          SUCCESS STORIES
        </Button>
      </div>
      <Statistics />
      <MainSections welcomeRef={welcomeRef} />
      <SuccessStories storyRef={storyRef} />
    </div>
  );
};

export default Community;

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
    minWidth: '12.5em',
    maxWidth: '12.5em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('sm')]: {
      minWidth: '14.5em',
      maxWidth: '14.5em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '11em',
      maxWidth: '11em',
    },
  },
}));
