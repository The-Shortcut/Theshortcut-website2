import React from 'react';

// image
import heroImage from '../../../assets/photos/home_hero.jpg';

//Materail-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// Children
import UpcomingEvents from './UpcomingEvents';
import GetInTheGame from './GetInTheGame';
import OurPatrners from './OurPatrners';

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div>
      <img src={heroImage} alt='home_hero_image' className={classes.hero} />
      <div className={classes.title}>
        <Typography variant='h1'>The Shortcut</Typography>
        <Typography variant='h3'>
          Accelerating talent through tech startups & high growth companies
        </Typography>
      </div>
      <div className={classes.buttons}>
        <Button variant='contained' color='primary' className={classes.button}>
          CONTACT US
        </Button>
        <Button variant='contained' color='default' className={classes.button}>
          LEARN MORE
        </Button>
      </div>
      <UpcomingEvents />
      <GetInTheGame />
      <OurPatrners />
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
    /* background: `url(${heroImage}) center/cover fixed no-repeat`, */
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
    margin: '-32em 12em 0',
    [theme.breakpoints.down('md')]: {
      margin: '-35em 10em 0',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '-20em 2em 0',
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '30%',
    margin: '6em auto',
    [theme.breakpoints.down('md')]: {
      maxWidth: '40%',
      margin: '6em auto',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '50%',
      margin: '4em auto',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '80%',
      margin: '4em auto',
    },
  },
  button: {
    display: 'inline',
    width: '12em',
    fontSize: '1rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      width: '10em',
      fontSize: '0.8rem',
    },
  },
}));
