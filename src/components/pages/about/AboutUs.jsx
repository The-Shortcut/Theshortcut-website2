import React from 'react';
import ReactPlayer from 'react-player';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

//Children
import Title from '../../custom/Title';

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title>About Us</Title>
      <div className={classes.container}>
        <div className={classes.text}>
          <Typography variant='body1'>
            The Shortcut is the largest talent accelerator in the Nordics. We equip talent with the
            skills and networks they need to drive growth and innovation, and to kickstart their
            entry into the Finnish startup world. Owned by Startup Foundation, The Shortcut is a
            non-profit organization dedicated to enhancing and expanding the startup community in
            the Nordics.
          </Typography>
          <Typography variant='body1'>
            We are committed to helping fill the talent gap by addressing the needs of the ecosystem
            and creating programs that feed talent into high-growth companies. Through our workshops
            and training sessions, we help our community achieve personal growth through upskilling,
            reskilling, and expanding their personal networks. The Shortcut has already helped
            thousands of people accelerate their entry into the startup world; so what are you
            waiting for? Join our community – we just might be the shortcut to your dream career.
          </Typography>
          <Button
            variant='contained'
            color='primary'
            style={{ color: '#FFFFFF', marginTop: '2em' }}>
            Join Community
          </Button>
        </div>
        <div className={classes.media}>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=j_wsZhPC_VM'
            controls={true}
            className={classes.player}
          />
        </div>
      </div>
      <div id='successStories' />
    </div>
  );
};

export default AboutUs;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '70%',
    maxWidth: '70%',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  text: {
    textAlign: 'justify',
    paddingRight: '3em',
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      paddingBottom: '2em',
    },
  },
  media: {
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  player: {
    minWidth: '640px',
    maxWidth: '640px',
    minHeight: '360px',
    maxHeight: '360px',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
      maxWidth: '100%',
      minHeight: '280px',
      maxHeight: '280px',
    },
  },
  photo: {
    minWidth: '460px',
    maxWidth: '460px',
    objectFit: 'contain',
    paddingTop: '1em',
  },
}));
