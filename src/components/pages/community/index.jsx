import React from 'react';

// Hero Image
import heroImage from '../../../assets/photos/communityHero.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
      <Typography variant='h1' className={classes.title}>
        Our Community
      </Typography>
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
  title: {
    minWidth:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    maxWidth: '80%',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '-4em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-3em',
    },
  },
}));
