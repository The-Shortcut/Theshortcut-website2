import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Hero Image
import heroImage from '../../../assets/photos/contactHero2.png';

// Children
/* import Team from './Team';
import Board from './Board'; */
import GetInTouch from './GetInTouch';
import FAQ from './FAQ';

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div  id='getInTouch'>
      {window.innerWidth < 960 ? (
        <img
          src={heroImage}
          width='100%'
          height='auto'
          alt='contact-page'
          style={{ filter: 'brightness(40%)' }}
        />
      ) : (
        <div className={classes.hero} />
      )}
      <Typography variant='h1' className={classes.title}>
        Contact Us
      </Typography>
      <GetInTouch />
      <FAQ />
      {/* <Team />
      <Board /> */}
    </div>
  );
};

export default ContactUs;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
  title: {
    minWidth:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    maxWidth: '80%',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '-5.2em',
    zIndex: 10,
    [theme.breakpoints.down('md')]: {
      margin: '-6em 0 0 1.8em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2em',
    },
  },
}));
