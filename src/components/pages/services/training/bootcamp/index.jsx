import React from 'react';

// META TAG
import MetaTag from '../../../../utils/MetaTag';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardContent } from '@material-ui/core';

// icons
import { GiCheckMark, GiHourglass } from 'react-icons/gi';
import { RiTimerFill, RiCodeBoxFill } from 'react-icons/ri';
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
    page: 'bootcamp',
    path: '/services/training/bootcamp',
  },
});

const Bootcamp = () => {
  const classes = useStyles();
  return (
    <div>
      <MetaTag
        title='Recruiter Bootcamp | The Shortcut'
        description='We have a historic talent shortage in Finland, so naturally, recruitment specialists have never been in higher demand. R&R Talent Advisors offers a four week training program in collaboration with the Shortcut to teach you everything about the recruitment life-cycle. You’ll learn both the technical (headhunting, boolean search) and non-technical sides (working with hiring managers/candidates, negotiation) of the profession. 
        We’re looking for a talented, hard-working, and diverse group of people that want to learn the (recruitment) ropes from the experienced team of R&R!
        '
        screenshot='https://theshortcut.org/wp-content/uploads/2021/08/Recruiter-Boot-Camp-2021-2.png'
      />
      {window.innerWidth < 960 ? (
        <img
          src={'https://theshortcut.org/wp-content/uploads/2021/08/Recruiter-Boot-Camp-2021-2.png'}
          width='100%'
          height='auto'
          alt='Bootcamp_page'
        />
      ) : (
        <div className={classes.hero} />
      )}
      <section className={classes.intro}>
        <Title>Become a Talent Acquisition Expert</Title>
        <Typography variant='body1' className={classes.text}>
          We have a historic talent shortage in Finland, so naturally, recruitment specialists have
          never been in higher demand. R&R Talent Advisors offers a four week training program in
          collaboration with the Shortcut to teach you everything about the recruitment life-cycle.
          You’ll learn both the technical (headhunting, boolean search) and non-technical sides
          (working with hiring managers/candidates, negotiation) of the profession.
          <br />
          We’re looking for a talented, hard-working, and diverse group of people that want to learn
          the (recruitment) ropes from the experienced team of R&R!
          <br />
          <ul>
            <li style={{listStyleType:'none', fontSize:'1.4rem', fontWeight:'bold'}}>This class is great for you if:</li>
            <li>You already have some skills in HR/Recruitment</li>
            <li>You are a complete novice or a job seeker that wants to make a career change</li>
            <li>
              You are fresh out of university and are interested in human resources/talent
              acquisition
            </li>
          </ul>
        </Typography>
        <Typography variant='body1'>
          About R&R Talent Advisors:{' '}
          <a href='https://www.rrtalentadvisors.com/' target='_blank' rel='noreferrer'>
            https://www.rrtalentadvisors.com/
          </a>
        </Typography>
        <Typography variant='body1'>
          Meet our speakers:{' '}
                  <Button
                      variant="outlined" color="secondary"
            href='https://www.linkedin.com/in/rob-pappas-73864a18/'
            target='_blank'
            rel='noreferrer'>
            Rob Pappas
          </Button>{' '}
                  <Button
                      variant="outlined" color="secondary"
            href='https://www.linkedin.com/in/magnus-lindfors-07378749/'
            target='_blank'
            rel='noreferrer'>
            Magnus Lindfors
          </Button>
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          target='_blank'
          href='https://docs.google.com/forms/d/e/1FAIpQLSc7GWl0qRGXNBB0Aym7u6at63hGfTNu-b2hs9bCGyBVKxkdKQ/viewform'>
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
              Full recruitment life-cycle
            </Typography>
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Headhunting and boolean search technique
            </Typography>
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Soft skills e.g. How to work with hiring managers/candidates, negotiation
            </Typography>
          </CardContent>
        </Card>
        <Card variant='outlined' className={classes.second}>
          <CardContent>
            <Typography variant='h3'>Program includes:</Typography>
            <br />
            <Typography variant='body1'>
              <GiHourglass style={{ paddingTop: 10, fontSize: '1.4rem' }} /> 12 hours of teaching
            </Typography>
            <Typography variant='body1'>
              <RiCodeBoxFill style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Opportunities to network
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
              6<sup>th</sup> September - 24<sup>th</sup> September
            </Typography>
            <Typography variant='body1'>
              <RiTimerFill style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Every Monday, Wednesday and Thursday. 16:00 - 17:30
            </Typography>
          </CardContent>
        </Card>
        <Card variant='outlined' className={classes.second}>
          <CardContent>
            <Typography variant='h3'>Requirements:</Typography>
            <br />
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Basic Computer skills
            </Typography>
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Full commitment to the program
            </Typography>
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Proactive attitude and strong motivation!
            </Typography>
          </CardContent>
        </Card>
      </section>
      <section className={classes.intro}>
        <Typography variant='body1'>
          We’d love to hear from you! Please direct any questions regarding the program content to
          Vickie Weng: <a href='vickie@theshortcut.org'>vickie@theshortcut.org</a>
        </Typography>
        <br />
        <Typography variant='h3'>
          Deadline for application : 1<sup>st</sup> September
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          target='_blank'
          href='https://forms.gle/S79edzcDCf4g1kaA7'>
          APPLY NOW
        </Button>
      </section>
    </div>
  );
};

export default Bootcamp;

const useStyles = makeStyles((theme) => ({
  hero: {
    marginTop: 70,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '50vh',
    maxHeight: '50vh',
    background: `#f9f9f9 center/contain url(https://theshortcut.org/wp-content/uploads/2021/08/Recruiter-Boot-Camp-2021-2.png) no-repeat`,
  },
  intro: {
    minWidth: '70%',
    maxWidth: '70%',
    margin: '3em auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
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
