import React from 'react';

// Image
import heroImage from '../../../assets/photos/aboutHero.jpeg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

// Children
import AboutUs from './AboutUs';
import SuccessStories from './SuccessStories';
import FAQ from './FAQ';

const About = () => {
  const classes = useStyles();
  return (
    <div id='aboutUs'>
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
      <AboutUs />
      <SuccessStories />
      <FAQ />
    </div>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '85vh',
    maxHeight: '85vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
}));
