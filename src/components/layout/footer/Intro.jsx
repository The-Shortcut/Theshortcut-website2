import React from 'react';

// Logo
import logo from '../../../assets/logo/shortcut/logo The Shortcut_white on transparent.png';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// ICONS
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Intro = () => {
  const classes = useStyles();
  return (
    <div style={{ flex: 1 }}>
      <div className={classes.info}>
        <img src={logo} alt='TheShortcut footer logo' className={classes.logo} />
        <Typography variant='body1'>
          We equip talent with the skills and networks they need to become an entrepreneur or work
          for a high-growth company/startup.
        </Typography>
        <div className={classes.address}>
          <PhoneIcon />
          <Typography variant='body2'>+358 46 640 3900</Typography>
          <EmailIcon />
          <Typography variant='body2'>info@theshortcut.org</Typography>
          <LocationOnIcon style={{ marginTop: '-15px' }} />
          <Typography variant='body2'>
            Maria01 (entrance 15B),
            <br /> Lapinlahdenkatu 16, 00180, Helsinki
          </Typography>
          <InfoIcon style={{ marginTop: '-15px' }} />
          <Typography variant='body2'>
            Open Monday &mdash; Friday, 9am &mdash; 5pm <br /> (or until the last event of the day
            is over)
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Intro;

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: '8em',
    maxHeight: '3em',
    marginBottom: '2em',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '12em',
      display: 'block',
    },
  },
  info: {
    color: '#fff',
    minWidth: '100%',
    [theme.breakpoints.up('sm')]: {
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
}));
