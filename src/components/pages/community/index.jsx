import React from 'react';

// Hero Image
import heroImage from '../../../assets/photos/communityHero.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

// Children
import Statistics from './Statistics';
import MainSections from './MainSections';
import SuccessStories from './SuccessStories';

const Community = () => {
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
      <Statistics />
      <MainSections />
      <SuccessStories />
    </div>
  );
};

export default Community;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '85vh',
    maxHeight: '85vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
}));
