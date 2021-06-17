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
        <Typography variant='h4'>
          The place for professional and social integration in Finland.
        </Typography>
        <div className={classes.address}>
          <PhoneIcon />
          <Typography variant='subtitle1' component='p'>
            +358 46 640 3900
          </Typography>
          <EmailIcon />
          <Typography variant='subtitle1' component='p'>
            info@theshortcut.org
          </Typography>
          <LocationOnIcon style={{ marginTop: '-15px' }} />
          <Typography variant='subtitle1' component='p'>
            Maria01 (entrance 15B),
            <br /> Lapinlahdenkatu 16, 00180, Helsinki
          </Typography>
          <InfoIcon style={{ marginTop: '-15px' }} />
          <Typography variant='subtitle1' component='p'>
            Open Wednesday & Thursday, 10am &mdash; 4pm <br />
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
