import React from 'react';

// HERO IMAGE
import heroImage from '../../../assets/photos/servicesHero.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

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
    minHeight: '85vh',
    maxHeight: '85vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
}));
