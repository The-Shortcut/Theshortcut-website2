import React from 'react';

// META TAG
import MetaTag from '../../../../utils/MetaTag';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

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
    page: 'bootcamp',
    path: '/services/training/bootcamp',
  },
});

const DigitalMarketing = () => {
  const classes = useStyles();
  return (
    <div>
      <MetaTag
        title='Digital Marketing Program | The Shortcut'
        description='Our Digital Marketing and Growth Hacking Program teaches you online marketing skills from Google Analytics to SEO/SEM. Within twelve weeks of immersive training you will learn the tools you need to become the next generation of digital marketing professionals.'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/10/DTP-Facebook-eventbrite-banner-.png'
      />
      {window.innerWidth < 960 ? (
        <img
          src={
            'https://theshortcut.org/wp-content/uploads/2021/10/DTP-Facebook-eventbrite-banner-.png'
          }
          width='100%'
          height='auto'
          alt='Bootcamp_page'
        />
      ) : (
        <div className={classes.hero} />
      )}
      <section className={classes.intro}>
        <Title>The Shortcut’s Digital Marketing and Growth Hacking Program</Title>
        <Typography variant='body1' className={classes.text}>
          Are you passionate about creating content for social media or want to find out why
          everyone in marketing is talking about growth hacking? Our Digital Marketing and Growth
          Hacking Program teaches you online marketing skills from Google Analytics to SEO/SEM.
          Within twelve weeks of immersive training you will learn the tools you need to become the
          next generation of digital marketing professionals.
          <br />
          If you’ve been dreaming about a career in digital marketing but found it hard to get an
          entry point to the industry, this program is meant for you. You will learn about social
          media management, creating marketing content, growth marketing, the basics of HTML and so
          much more.
          <br />
          As a participant of the Digital Marketing and Growth Hacking program you will learn
          relevant digital marketing skills from “startup doers.” Our teachers are industry experts
          who have walked the digital marketing journey and want to share their knowledge and
          experiences. You can even put your newly acquired skills into practice with
          hands-on-projects that simulate real working practices. Sounds like the program for you?
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          target='_blank'
          href='#'>
          APPLY NOW
        </Button>
      </section>
      <section className={classes.wrapper}>
        <Card variant='outlined' className={classes.first}>
          <CardContent>
            <Typography variant='h3'>What you'll learn:</Typography>
            <br />
            {/* <List>
              <ListItem>
                <ListItemIcon>
                  <GiCheckMark style={{ fontSize: '1.4rem' }} />
                </ListItemIcon>
                <ListItemText>Digital marketing skills.</ListItemText>
              </ListItem>
              <ListItem
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <ListItemIcon>
                  <GiCheckMark style={{ fontSize: '1.4rem', border: '1px solid red' }} />
                </ListItemIcon>
                <ListItemText>
                  Google Analytics, SEO/SEM, social media management, content creation, growth
                  marketing, etc.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GiCheckMark style={{ fontSize: '1.4rem' }} />
                </ListItemIcon>
                <ListItemText>Growth mindset approach.</ListItemText>
              </ListItem>
            </List> */}
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Digital marketing skills
            </Typography>
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Google Analytics, SEO/SEM, social media management, content creation, growth
              marketing, etc.
            </Typography>
            <Typography variant='body1'>
              <GiCheckMark style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              growth mindset approach
            </Typography>
          </CardContent>
        </Card>
        <Card variant='outlined' className={classes.first}>
          <CardContent>
            <Typography variant='h3'>Program includes:</Typography>
            <br />
            <Typography variant='body1'>
              <AiFillSafetyCertificate style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Workshops & lectures by industry experts & "startup doers"
            </Typography>
            <Typography variant='body1'>
              <AiFillSafetyCertificate style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              1-on-1 mentorship and guidance
            </Typography>
            <Typography variant='body1'>
              <AiFillSafetyCertificate style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Career coaching & soft skill development training
            </Typography>
            <Typography variant='body1'>
              <AiFillSafetyCertificate style={{ paddingTop: 10, fontSize: '1.4rem' }} />
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
              10<sup>th</sup> January - 1<sup>st</sup> April 2022
            </Typography>
            <Typography variant='body1'>
              <RiTimerFill style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              12 week immersive training program.
            </Typography>
            <Typography variant='body1'>
              <RiTimerFill style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              five days a week, seven hours per day
            </Typography>
            <Typography variant='body1'>
              <RiTimerFill style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Application deadline: 7th of December 2021
            </Typography>
          </CardContent>
        </Card>
        <Card variant='outlined' className={classes.first}>
          <CardContent>
            <Typography variant='h3'>Requirements:</Typography>
            <br />
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Currently unemployed
            </Typography>
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Determined and driven to pursue a career in digital marketing
            </Typography>
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Higher education degree (college/bachelor or higher), OR vocational business training
              combined with a few years of relevant work experience
            </Typography>
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              comfortable working in English
            </Typography>
            <Typography variant='body1'>
              <DiRequirejs style={{ paddingTop: 10, fontSize: '1.4rem' }} />
              Can commit to all 12 weeks of the program, 5 days a week, 7 hours a day
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
          Application deadline : 7<sup>th</sup> December 2021
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          target='_blank'
          href='"'>
          APPLY NOW
        </Button>
      </section>
    </div>
  );
};

export default DigitalMarketing;

const useStyles = makeStyles((theme) => ({
  hero: {
    marginTop: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `#f9f9f9 center/contain url(https://theshortcut.org/wp-content/uploads/2021/10/DTP-Facebook-eventbrite-banner-.png) no-repeat`,
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
    minWidth: '48%',
    maxWidth: '48%',
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