import React from 'react';

// Image
import heroImage from '../../../assets/photos/aboutHero2.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Children
import AboutUs from './AboutUs';
import CoreValues from './CoreValues';
/* import SuccessStories from './SuccessStories'; */
/* import FAQ from './FAQ'; */
import Team from './Team';
import Board from './Board';

const About = () => {
  const classes = useStyles();

  return (
    <div>
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
      <Typography variant='h1' className={classes.title}>
        About Us
      </Typography>
      <div className={classes.loc} id='aboutUs' />
      <AboutUs />
      <CoreValues />
      {/* <SuccessStories /> */}
      {/* <FAQ /> */}
      <Team />
      <Board />
    </div>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
    zIndex: -1,
  },
  title: {
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    maxWidth: '80%',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '-5.2em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2em',
    },
  },
  loc: {
    minWidth: '100%',
    minHeight: '2.2em',
    background: '#f9f9f9',
  },
}));
