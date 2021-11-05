/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

// META TAG
import MetaTag from '../../../../utils/MetaTag';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardContent } from '@material-ui/core';

import spyBanner from '../../../../../assets/photos/spy-banner.jpg';

// icons
import { GiCheckMark } from 'react-icons/gi';
import { RiTimerFill } from 'react-icons/ri';
import { DiRequirejs } from 'react-icons/di';
import { AiFillSafetyCertificate } from 'react-icons/ai';

// Children
import Title from '../../../../custom/Title';

// GTM
import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'the-spy-who-hired-me',
    path: '/services/training/the-spy-who-hired-me',
  },
});

const SpyWhoHiredMe = () => {
  const classes = useStyles();
  return (
    <div>
      <MetaTag
        title='The Spy Who Hired Me | The Shortcut'
        description='We are launching a new kind of networking event series called "The Spy who Hired Me". Everybody in the room will present themselves as a candidate for a potential job in the ...'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/11/spy_who_hired_me.png'
      />
      {/* <div className={classes.hero}>
        <div className={classes.heroContainer}>
          <Typography variant='h1' className={classes.title}>
            The Spy Who Hired Me <br /> - Tech Edition
          </Typography>
        </div>
      </div> */}
{/*       {window.innerWidth < 960 ? (
        <img
          src={spyBanner}
          width='100%'
          style={{ objectFit: 'contain', minHeight:'400px' }}
          alt='the-spy-who-hired-me'
        />
      ) : ( */}
        <div className={classes.hero} />
{/*       )} */}
      <Typography variant='h1' className={classes.pageTitle}>
        THE SPY <br /> WHO <br /> HIRED ME
      </Typography>
      <section className={classes.intro}>
        <Title>You've never been to a networking event like this.</Title>
        <Typography variant='body1' className={classes.text}>
          In this unique networking event, everybody in the room will present themselves as a
          candidate for a potential job in the tech industry. But we have planted three secret
          recruiters in your ranks that get the chance to get to know you authentically. After a
          round of networking, we will reveal who the recruiters are and invite them on stage to
          discuss and give feedback.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          target='_blank'
          rel='noopener noreferrer'
          href='https://theshortcut1.typeform.com/to/swi9Hu3t'>
          APPLY NOW
        </Button>
      </section>
      <section className={classes.wrapper}>
        <Card variant='outlined' className={classes.first}>
          <CardContent>
            <Typography variant='h3'>Who is this event for?</Typography>
            <br />
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              In our first event from "The Spy who Hired Me" series, we will focus on connecting
              TECH TALENT with recruiters. To join our event, you need to be unemployed or looking
              for a new job and have at least one year of experience in the tech industry.
            </Typography>
          </CardContent>
        </Card>
        <Card variant='outlined' className={classes.first}>
          <CardContent>
            <Typography variant='h3'>How can I join?</Typography>
            <br />
            <Typography variant='body1'>
              <AiFillSafetyCertificate style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              You can apply for a spot for our event until the 8th of November. The deadline is at
              midnight. Please make sure to have your CV attached to the form. We will let you know
              if you are one of our chosen attendees by Monday, 15th of November.
            </Typography>
          </CardContent>
        </Card>
        {/* </section>
      <section className={classes.wrapper}> */}
        <Card variant='outlined' className={classes.first}>
          <CardContent>
            <Typography variant='h3'>When & Where is this event?</Typography>
            <br />
            <Typography variant='body1'>
              <RiTimerFill style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              IF you are chosen, you will be invited to our event on November 18th at Maria 01,
              Arcade5 Arena from 17:00 to 18:30. This is an onsite event, so we require you to be
              either fully vaccinated or have recovered from covid.
            </Typography>
          </CardContent>
        </Card>
        <Card variant='outlined' className={classes.first}>
          <CardContent>
            <Typography variant='h3'>All the details:</Typography>
            <br />
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              What: The Spy Who Hired Me - TECH Edition
            </Typography>
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              When: November 18th, 17:00 - 18:30
            </Typography>
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Where: Maria 01 Arcade5 Arena, Lapinlahdenkatu 16
            </Typography>
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              How: Apply and we will inform you if you are one of the chosen participants by 15th of
              November
            </Typography>
          </CardContent>
        </Card>
      </section>
      <section className={classes.lastSection}>
        <Typography variant='body1' style={{ maxWidth: '60%', textAlign: 'center' }}>
          Please direct any questions regarding the event to Ekaterina Berdysheva: <br />
          <a href='ekaterina.berdysheva@theshortcut.org' style={{ color: '#00FFFF' }}>
            ekaterina@theshortcut.org
          </a>
        </Typography>
        <br />
        <Typography variant='h3'>
          Application deadline: 8<sup>th</sup> November 2021
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.applyBtn}
          target='_blank'
          rel='noopener noreferrer'
          href='https://theshortcut1.typeform.com/to/swi9Hu3t'>
          APPLY NOW
        </Button>
      </section>
    </div>
  );
};

export default SpyWhoHiredMe;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '70vh',
    maxHeight: '70vh',
    [theme.breakpoints.down('xs')]: {
      minHeight: '50vh',
    maxHeight: '50vh',
    },
    background: `url(${spyBanner}) center/cover fixed no-repeat`,
    backgroundSize: 'cover',
    position: 'relative',
  },
  pageTitle: {
    minWidth: '100%',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom:'27%',
    textAlign: 'center',
    color: '#FFFFFF',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      bottom:'48%',
      },
    textShadow: '0 1px 30px rgba(255, 255, 255, 1)'
  },
  heroContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '80%',
    maxWidth: '80%',
    minHeight: '100%',
    maxHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      minWidth: '75%',
      maxWidth: '75%',
      alignItems: 'flex-end',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '95%',
      maxWidth: '95%',
      alignItems: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  },
  title: {
    flex: 2,
    color: '#FFFFFF',
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      flex: 1,
      maxHeight: 150,
    },
  },
  banner: {
    flex: 1,
    alignSelf: 'end',
    minWidth: '30em',
    maxWidth: '30em',
    minHeight: '30em',
    maxHeight: '30em',
    [theme.breakpoints.down('md')]: {
      minWidth: '25em',
      maxWidth: '25em',
      minHeight: '25em',
      maxHeight: '25em',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '20em',
      maxWidth: '20em',
      minHeight: '20em',
      maxHeight: '20em',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '10em',
      maxWidth: '10em',
      minHeight: '10em',
      maxHeight: '10em',
    },
  },
  intro: {
    minWidth: '60%',
    maxWidth: '60%',
    margin: '3em auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: '80%',
      maxWidth: '80%',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1em auto',
    },
    textAlign: 'left',
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
    minWidth: '80%',
    maxWidth: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    margin: '1em auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  first: {
    flex: 1,
    minWidth: '48%',
    maxWidth: '48%',
    marginBottom: '1em',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  second: {
    flex: 1,
    minWidth: '35%',
    maxWidth: '35%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
      margin: '1em auto',
    },
  },
  third: {
    flex: 1,
    minWidth: '45%',
    maxWidth: '45%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  forth: {
    flex: 1,
    minWidth: '45%',
    maxWidth: '45%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  item: {
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid red',
  },
  lastSection: {
    backgroundColor: '#141414',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7em 0',
    marginBottom: '-4em',
  },
  text: {
    textAlign: 'center',
    lineHeight: '28px',
    padding: '0 1.2em',
  },
  applyBtn: {
    color: '#fff',
    backgroundColor: '#a90061',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginTop: 30,
  },
}));
