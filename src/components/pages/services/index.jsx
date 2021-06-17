import React from 'react';
import { Link } from 'react-router-dom';

// HERO IMAGE
import heroImage from '../../../assets/photos/servicesHero.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// CHILDREN
import Training from './training';
import Coaching from './coaching';
const Services = () => {
  const classes = useStyles();
  return (
    <div id='coaching'>
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
      <div className={classes.buttons}>
        {/* <Link href='#games' style={{ textDecoration: 'none' }}> */}
        <Button variant='contained' color='primary' className={classes.button}>
          COACHING
        </Button>
        {/* </Link> */}
        <Link href='/partners' style={{ textDecoration: 'none' }}>
          <Button variant='contained' size='large' color='default' className={classes.button}>
            TRAINING
          </Button>
        </Link>
      </div>
      <Coaching />
      <Training />
    </div>
  );
};

export default Services;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '40%',
    margin: '-10em auto 0',
    [theme.breakpoints.only('md')]: {
      maxWidth: '45%',
      margin: '5em auto 0',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '55%',
      margin: '4em auto 0',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  button: {
    display: 'inline',
    width: '11em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('sm')]: {
      width: '14em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    /*  [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
    }, */
  },
}));
