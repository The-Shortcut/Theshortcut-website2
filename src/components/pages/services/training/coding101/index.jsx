import React from 'react';

// META TAG
import MetaTag from '../../../../utils/MetaTag';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardContent } from '@material-ui/core';

// icons
import { GiCheckMark, GiHourglass } from 'react-icons/gi';
import { RiTimerFill, RiDownloadCloud2Fill, RiCodeBoxFill } from 'react-icons/ri';
import { DiRequirejs } from 'react-icons/di';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';

// Children
import Title from '../../../../custom/Title';

// GTM
import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'Coding101',
    path: '/coding101',
  },
});

const Coding101 = () => {
  const classes = useStyles();
  return (
    <div>
      <MetaTag
        title='coding101 | The Shortcut'
        description='Our training program “Coding 101 - Web Development Essentials” teaches you in 12 weeks the three basic coding languages - HTML, CSS and JavaScript.
        You don’t need any previous coding experience but you need to be able to commit to the full 12 weeks of training. 
        Sessions are every Tuesday and Thursday from 16:00 - 17:30.'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/08/Coding-101-banner-1.png'
      />
      {window.innerWidth < 960 ? (
        <img
          src={'https://theshortcut.org/wp-content/uploads/2021/08/Coding-101-banner-1.png'}
          width='100%'
          height='auto'
          alt='coding101_page'
        />
      ) : (
        <div className={classes.hero} />
      )}
      <section className={classes.intro}>
        <Title>Are you ready to learn the basics of coding?</Title>
        <Typography variant='body1' className={classes.text}>
          Our training program “Coding 101 - Web Development Essentials” teaches you in 12 weeks the
          three basic coding languages - HTML, CSS and JavaScript. You don’t need any previous
          coding experience but you need to be able to commit to the full 12 weeks of training.
          <br />
          At the end of the course, you will have the chance to use the skills you learned in a
          project and successful participants will receive a certificate.
          <br />
          After completing the course you will be able to build a website or homepage and perform
          any tasks associated with developing websites for hosting via intranet or internet.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          target='_blank'
          href='https://forms.gle/tVc7XTNYrB1DcLx18'>
          APPLY NOW
        </Button>
      </section>
      <section className={classes.wrapper}>
        <Card variant='outlined' className={classes.first}>
          <CardContent>
            <Typography variant='h3'>What you'll learn:</Typography>
            <br />
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Project based teaching to sharpen your HTML, CSS & JavaScript skills
            </Typography>
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Perfect for beginners looking for things to build mini projects in a short time
            </Typography>
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Modern styling with flexbox, CSS animations
            </Typography>
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Learn to work with variables, conditions, arrays, and loops in JavaScript
            </Typography>
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              DOM manipulation & events
            </Typography>
          </CardContent>
        </Card>
        <Card variant='outlined' className={classes.second}>
          <CardContent>
            <Typography variant='h3'>What includes:</Typography>
            <br />
            <Typography variant='body1'>
              <GiHourglass style={{ paddingTop: 10, fontSize: '1.4rem' }} /> More than 24 hours
              teaching
            </Typography>
            <Typography variant='body1'>
              <RiCodeBoxFill style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Live coding challenges
            </Typography>
            <Typography variant='body1'>
              <RiDownloadCloud2Fill style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Downloadable resources
            </Typography>
            <Typography variant='body1'>
              <AiFillSafetyCertificate style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Certificate of completion
            </Typography>
          </CardContent>
        </Card>
      </section>
      <section className={classes.wrapper}>
        <Card variant='outlined' className={classes.first}>
          <CardContent>
            <Typography variant='h3'>Duration:</Typography>
            <br />
            <Typography variant='body1'>
              <RiTimerFill style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              14th September - 2nd December (12 weeks)
            </Typography>
            <Typography variant='body1'>
              <RiTimerFill style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Every Tuesday and Thursday, 16.00-17.30
            </Typography>
          </CardContent>
        </Card>
        <Card variant='outlined' className={classes.second}>
          <CardContent>
            <Typography variant='h3'>Requirments:</Typography>
            <br />
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Basic Computer skills
            </Typography>
          </CardContent>
        </Card>
      </section>
      <section className={classes.intro}>
        <Typography variant='body1'>
          We’d love to hear from you! Please direct any questions regarding the program content to
          Mostafa Hazareh:{' '}
          <a href='mailto:mostafa.hazareh@theshortcut.org'>mostafa.hazareh@theshortcut.org</a>
        </Typography>
        <br />
        <Typography variant='h3'>Deadline for application : 6th September</Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          target='_blank'
          href='https://forms.gle/tVc7XTNYrB1DcLx18'>
          APPLY NOW
        </Button>
      </section>
    </div>
  );
};

export default Coding101;

const useStyles = makeStyles((theme) => ({
  hero: {
    marginTop: 70,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '50vh',
    maxHeight: '50vh',
    background: `#f9f9f9 center/contain url(https://theshortcut.org/wp-content/uploads/2021/08/Coding-101-banner-1.png) no-repeat`,
  },
  intro: {
    minWidth: '80%',
    maxWidth: '80%',
    margin: '3em auto',
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
    minWidth: '80%',
    maxWidth: '80%',
    display: 'flex',
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
    minWidth: '60%',
    maxWidth: '60%',
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
}));
