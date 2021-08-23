import React from 'react';

// META TAG
import MetaTag from '../../utils/MetaTag';

// HERO IMAGE
import heroImage from '../../../assets/photos/meetus.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Children
import Subject from './Subject';
import TeamAvailabilities from './TeamAvailabilities';

const MeetUs = () => {
  const classes = useStyles();

  return (
    <div>
      <MetaTag
        title='Meet-Us | The Shortcut'
        description='Book a Meeting to learn and more contact with The shortcut people.'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/about-us.png'
      />
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
        Meet Us
      </Typography>
      <Subject />
      <TeamAvailabilities />
    </div>
  );
};

export default MeetUs;

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
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '-3.3em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2.4em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-1.5em',
    },
  },
  loc: {
    minWidth: '100%',
    minHeight: '2.2em',
    background: '#f9f9f9',
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minWidth: '60%',
    maxWidth: '60%',
    margin: '-9em auto 0',
    [theme.breakpoints.only('md')]: {
      minWidth: '80%',
      maxWidth: '80%',
      marginTop: '-8em',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '60%',
      maxWidth: '60%',
      marginTop: '-8em',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '95%',
      maxWidth: '95%',
      marginTop: 0,
    },
  },
  button: {
    display: 'inline',
    minWidth: '9em',
    maxWidth: '9em',
    color: '#FFFFFF',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('sm')]: {
      minWidth: '8em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '6.8em',
      maxWidth: '6.8em',
    },
  },
}));
