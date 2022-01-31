import React from 'react';

// logos
import googleLogo from '../../../assets/logo/sparkAcademyPartners/growWithGoogle.png';
import cityOfHelsinkiLogo from '../../../assets/logo/sparkAcademyPartners/cityOfHelsinkiBlack.png';
import espooLogo from '../../../assets/logo/sparkAcademyPartners/espooLogo.png';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const Partners = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Typography variant='h3' style={{ fontFamily: 'Noto Serif Display', textAlign: 'center' }}>
          Project Partners:
        </Typography>
        <div className={classes.logos}>
          <img
            src={cityOfHelsinkiLogo}
            alt='city of helsinki Logo'
            width='220vw'
            height='auto'
            className={classes.log}
          />
          <img
            src={googleLogo}
            alt='Google Logo'
            width='350vw'
            height='auto'
            className={classes.log}
          />
        </div>
        <Typography variant='h3' style={{ fontFamily: 'Noto Serif Display', textAlign: 'left', marginTop: 60 }}>
          Ecosystem Partners:{' '}
        </Typography>
        <img
          src={espooLogo}
          alt='Google Logo'
          width='220vw'
          height='auto'
          className={classes.ecoLogo}
        />
      </div>
    </section>
  );
};

export default Partners;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#FDEFE4',
    padding: theme.spacing(11, 5),
  },
  container: {
    margin: 'auto',
    maxWidth: '75%',
  },
  logos: {
    margin: '3em auto',
    maxWidth: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {
      minHeight: '260px',
    },
  },
  logo: {
    maxWidth: '250px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '120px',
    },
  },
  ecoLogo: {
    margin: 40,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));
