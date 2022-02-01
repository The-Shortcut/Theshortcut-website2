import React from 'react';

// META TAG
import MetaTag from '../../utils/MetaTag';

// Hero Image
import mediaHero from '../../../assets/photos/media-hero.png';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// Children
import Title from '../../custom/Title';

// GTM
import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'for-media',
    path: '/for-media',
  },
});

const OurMedia = () => {
  const classes = useStyles();
  return (
    <div>
      <MetaTag
        title='For media | The Shortcut'
        description='
        The Shortcut is the place for meaningful professional integration and career transformation in Finland. We are an impact-driven non-profit organization that bridges the gap between job seekers and companies in Finland by providing in-demand training and fostering a growth mindset in the community where educated individuals can upskill and build a meaningful career.'
        screenshot=''
      />
      {window.innerWidth < 960 ? (
        <img
          src={mediaHero}
          width='100%'
          height='auto'
          alt='about-page'
          style={{ filter: 'brightness(40%)' }}
        />
      ) : (
        <div className={classes.hero} />
      )}
      <Typography variant='h1' className={classes.title}>
        For Media
      </Typography>
      <section className={classes.intro}>
        <Title>About The Shortcut</Title>
        <Typography variant='body1' className={classes.text}>
          The Shortcut is the place for meaningful professional integration and career
          transformation in Finland. We are an impact-driven non-profit organization that bridges
          the gap between job seekers and companies in Finland by providing in-demand training and
          fostering a growth mindset in the community where educated individuals can upskill and
          build a meaningful career.
        </Typography>
      </section>
      <section className={classes.section}>
        <Typography variant='h4'>
          Media Kit English:{' '}
          <Button
            component='button'
            target='_blank'
            href='https://theshortcut.org/wp-content/uploads/2021/12/Media-Kit_The-Shortcut.pdf'>
            Media Kit English download
          </Button>
        </Typography>
        <Typography variant='h4'>
          Media Kit Finnish:
          <Button
            component='button'
            target='_blank'
            href='https://theshortcut.org/wp-content/uploads/2022/02/Media-Kit-Finnish.pdf'>
            Media Kit Finnish download
          </Button>
        </Typography>
        <Typography variant='h4'>
          Logos:{' '}
          <Button
            component='button'
            href='https://theshortcut.org/wp-content/uploads/2021/12/logos.zip'>
            Zip File with Logos
          </Button>
        </Typography>
      </section>
      <section className={classes.lastSection}>
        <Typography variant='h3' style={{ textAlign: 'center' }}>
          Have a question?
        </Typography>
        <Typography variant='body1' className={classes.text}>
          Contact our Head of Marketing, Jessica Christian
        </Typography>
        <a href='mailto:jessi.christian@theshortcut.org' style={{ color: '#7c4dff' }}>
          jessi.christian@theshortcut.org
        </a>
      </section>
    </div>
  );
};

export default OurMedia;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${mediaHero}) center/cover fixed no-repeat`,
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
  intro: {
    minWidth: '80%',
    maxWidth: '80%',
    margin: '1em auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1em auto',
    },
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    display: 'inline',
    width: '9em',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    margin: '1em auto 0',
    [theme.breakpoints.down('md')]: {
      width: '12em',
      fontSize: '0.8rem',
    },
  },
  wrapper: {
    background: '#DDDDDD',
    border: '1px solid #DDDDDD',
    margin: '7em auto',
    [theme.breakpoints.down('sm')]: {
      margin: '2em auto',
    },
  },
  section: {
    minWidth: '70%',
    maxWidth: '70%',
    margin: '3em auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: '80%',
      maxWidth: '80%',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1em auto',
    },
  },
  lastSection: {
    minWidth: '100%',
    backgroundColor: '#141414',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7em 0',
    marginBottom: '-4em',
  },
}));
