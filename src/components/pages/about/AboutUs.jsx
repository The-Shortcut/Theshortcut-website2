import React from 'react';
import { Link } from 'react-router-dom';
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
      <Title>The solution to educated unemployment in Finland</Title>
      <div className={classes.container}>
        <div className={classes.text}>
          <Typography variant='body1' style={{ lineHeight: '1.4em' }}>
            Owned by the Startup Foundation, The Shortcut is an impact-driven non-profit
            organization dedicated to career transformation. We bridge the gap between job seekers
            and companies in Finland by providing in-demand training and fostering a growth mindset
            in the community, where educated individuals can upskill and build a meaningful career.
          </Typography>
          <br />
          <Typography variant='body1' style={{ lineHeight: '1.4em' }}>
            We support you to accelerate your professional integration in Finland through training,
            entrepreneurship, and community. We began as an entrepreneurial initiative in 2016 and
            have evolved into a diverse training and events hub, with over 130 nationalities and
            5000+ event and activity participants. So what are you waiting for? Join our community,
            we may just be the shortcut you need to a meaningful career in Finland.
          </Typography>
          <Link to='/community' style={{ textDecoration: 'none' }}>
            <Button
              variant='contained'
              color='primary'
              style={{ color: '#FFFFFF', marginTop: '2em' }}>
              Join Community
            </Button>
          </Link>
        </div>
        <div className={classes.media}>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=j_wsZhPC_VM'
            controls={true}
            className={classes.player}
          />
          {/* <img src={aboutUs} alt='about us' className={classes.player} /> */}
        </div>
      </div>
      <div id='core-values' />
    </div>
  );
};

export default AboutUs;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    margin: '5em auto',
    border: '1px solid #f9f9f9',
    [theme.breakpoints.down('md')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  text: {
    /* textAlign: 'center', */
    flex: 2,
    paddingRight: '1em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
    /* paddingRight: '0.3em',
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      paddingBottom: '2em',
    }, */
  },
  media: {
    flex: 1,
    /*  flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }, */
  },
  player: {
    minWidth: '480px',
    maxWidth: '480px',
    height: '100%',
    /*  minHeight: '320px',
    maxHeight: '320px', */
    [theme.breakpoints.down('xs')]: {
      minWidth: '320px',
      maxWidth: '320px',
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
