import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// Children
import Title from '../../custom/Title';
import Map from '../../functional/Map';

const GetInTouch = ({findRef}) => {
  const classes = useStyles();

  return (
    <div ref={findRef} className={classes.root}>
      <Title>Get In Touch</Title>
      <div>
        <div className={classes.contact}>
          <Typography variant='h4'>The Shortcut Lab</Typography>
          <div className={classes.info}>
            <div>
              <div style={{display:'flex', margin: 10}}>
                <EmailIcon style={{ marginRight: 10, marginTop: 3 }} />
                <Typography variant='body1'>info@theshortcut.org</Typography>
              </div>
              <div style={{display:'flex', margin: 10}}>
                <InfoIcon style={{ marginRight: 10, marginTop: 3 }} />
                <Typography variant='body1'>Open Wednesday & Thursday, 10am &mdash; 4pm</Typography>
              </div>
            </div>
            <div style={{display:'flex', margin: 10}}>
            <LocationOnIcon style={{ marginRight: 10, marginTop: 3 }} />
            <Typography variant='body1'>
              Maria01 (entrance 15B),
              <br /> Lapinlahdenkatu 16, 00180, Helsinki
            </Typography>
            </div>
          </div>
          <div className={classes.map}>
            <Map />
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
    [theme.breakpoints.down('xs')]: {
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
      alignItems: 'flex-start'
    },
  },
  address: {
    display:'flex'
  },
}));
