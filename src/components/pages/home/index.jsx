import React from 'react';

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
  return (
    <div>
      <div>
        <img src={heroImage} alt='home_hero_image' className={classes.hero} />
        <div className={classes.title}>
          <Typography variant='h1'>The Shortcut</Typography>
          <Typography variant='h3'>
            The place for social and professional integration in Finland
          </Typography>
        </div>
        <div className={classes.buttons}>
          <Link href='#games' style={{ textDecoration: 'none' }}>
            <Button variant='contained' color='primary' className={classes.button}>
              For Individuals
            </Button>
          </Link>
          <Link href='/partners' style={{ textDecoration: 'none' }}>
            <Button variant='contained' color='default' className={classes.button}>
              Collaborate With Us
            </Button>
          </Link>
        </div>
      </div>
      <GetInTheGame />
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
    maxHeight: '100vh',
    [theme.breakpoints.down('xs')]: {
      height: '35em',
    },
    /* background: `url(${heroImage}) center/cover fixed no-repeat`, */
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    margin: '-32em 12em 0',
    [theme.breakpoints.only('md')]: {
      margin: '-35em 10em 0',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '-24em 1em 0',
    },
  },
  buttons: {
    border: '2px solid red',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '40%',
    margin: '6em auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '60%',
      margin: '5em auto',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '90%',
      margin: '4em auto',
    },
  },
  button: {
    display: 'inline',
    width: '12em',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      width: '12em',
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
    },
  },
}));
