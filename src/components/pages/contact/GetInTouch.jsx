/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// Children
import Title from '../../custom/Title';

const GetInTouch = ({ findRef }) => {
  const classes = useStyles();

  return (
    <div ref={findRef} className={classes.root}>
      <Title>Find Us</Title>
      <div>
        <div className={classes.contact}>
          <Typography variant='h4'>The Shortcut Lab</Typography>
          <div className={classes.info}>
            <div>
              <div style={{ display: 'flex', margin: 10 }}>
                <EmailIcon style={{ marginRight: 10, marginTop: 3 }} />
                <Typography variant='body1'>info@theshortcut.org</Typography>
              </div>
              <div style={{ display: 'flex', margin: 10 }}>
                <InfoIcon style={{ marginRight: 10, marginTop: 3 }} />
                <Typography variant='body1'>Open Wednesday & Thursday, 10am &mdash; 4pm</Typography>
              </div>
            </div>
            <div style={{ display: 'flex', margin: 10 }}>
              <LocationOnIcon style={{ marginRight: 10, marginTop: 3 }} />
              <Typography variant='body1'>
                Maria01 (entrance 15B),
                <br /> Lapinlahdenkatu 16, 00180, Helsinki
              </Typography>
            </div>
          </div>
          <div className={classes.map}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.8147075145432!2d24.919504915888247!3d60.167246281959855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bcaeccfa0f1%3A0x18344d73b341d1e9!2sLapinlahdenkatu%2016%2C%2000180%20Helsinki!5e0!3m2!1sen!2sfi!4v1627567353327!5m2!1sen!2sfi'
              width='100%'
              height='600'
              style={{ margin: 'auto', minWidth: '100%', maxHeight: '240px', border: 'none' }}
              allowfullscreen=''
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <div id='faq' />
    </div>
  );
};

export default GetInTouch;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '70%',
    maxWidth: '70%',
    margin: '9em auto 8em',
    [theme.breakpoints.down('md')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '95%',
      maxWidth: '95%',
      margin: '2em auto',
    },
  },
  /*   contact: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 'auto',
  }, */
  contact: {
    minWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      flex: 1,
      minWidth: 'auto',
    },
  },
  info: {
    maxWidth: '100%',
    minWidth: '100%',
    margin: '1em auto 2em',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  address: {
    display: 'flex',
  },
}));
