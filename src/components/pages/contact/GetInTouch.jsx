import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// Children
import Title from '../../custom/Title';
import ContactForm from './ContactForm';
import Map from '../../functional/Map';

const GetInTouch = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title>Contact Us</Title>
      <div className={classes.contact}>
        <div className={classes.info}>
          <ContactForm />
        </div>
        <div className={classes.info}>
          <Typography variant='h6'>The Shortcut Lab</Typography>
          <div className={classes.address}>
            <PhoneIcon />
            <Typography variant='body1'>+358 46 640 3900</Typography>
            <EmailIcon />
            <Typography variant='body1'>info@theshortcut.org</Typography>
            <LocationOnIcon style={{marginTop:'-15px'}}/>
            <Typography variant='body1'>
              Maria01 (entrance 15B),
              <br /> Lapinlahdenkatu 16, 00180, Helsinki
            </Typography>
            <InfoIcon style={{marginTop:'-15px'}}/>
            <Typography variant='body1'>
              Open Monday &mdash; Friday, 9am &mdash; 5pm <br /> (or until the last event of the day
              is over)
            </Typography>
          </div>
          <div className={classes.map}>
            <Map />
          </div>
        </div>
          </div>
          <div id='ourTeam' />
    </div>
  );
};

export default GetInTouch;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '63%',
    maxWidth: '63%',
    margin: '8em auto 5em',
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
  contact: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 'auto',
  },
  info: {
    minWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      flex: 1,
      minWidth: 'auto',
    },
  },
  address: {
    maxWidth: '100%',
    minWidth: '100%',
    margin: '1em auto 2em',
    display: 'grid',
    gridGap: '10px',
    gridTemplate: 'auto 1fr / auto 1fr',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      /* maxWidth: '50%' */
    },
  },
  map: {},
}));
