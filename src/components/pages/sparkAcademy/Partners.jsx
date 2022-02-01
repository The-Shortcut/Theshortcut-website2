import React from 'react';

// logos
import googleLogo from '../../../assets/logo/sparkAcademyPartners/growWithGoogle.png';
import cityOfHelsinkiLogo from '../../../assets/logo/sparkAcademyPartners/cityOfHelsinkiBlack.png';
import espooLogo from '../../../assets/logo/sparkAcademyPartners/espooLogo.png';
import mimmitKooda from '../../../assets/logo/sparkAcademyPartners/mimmitKoodaa.png';
import iwwofLogo from '../../../assets/logo/sparkAcademyPartners/iwwofLogo.png';
import startupFoundation from '../../../assets/logo/sparkAcademyPartners/startupFoundation.png';
import techNordicAdvocates from '../../../assets/logo/sparkAcademyPartners/techNordicAdvocates.png';
import yysLogo from '../../../assets/logo/sparkAcademyPartners/yysLogo.png';
import tekLogo from '../../../assets/logo/sparkAcademyPartners/tekLogo.png';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const projectLogos = [
  {
    logo: cityOfHelsinkiLogo,
    name: 'city Of Helsinki Logo',
    width: '220vw',
  },
  {
    logo: googleLogo,
    name: 'grow with google Logo',
    width: '350vw',
  },
];

const ecoSystemLogos = [
  {
    logo: espooLogo,
    name: 'city of espoo Logo',
    width: '160vw',
  },
  {
    logo: mimmitKooda,
    name: 'mimmit kooda logo',
    width: '100vw',
  },
  {
    logo: iwwofLogo,
    name: 'IWWOF Logo',
    width: '110vw',
  },
  {
    logo: startupFoundation,
    name: 'startup Foundation logo',
    width: '220vw',
  },
  {
    logo: techNordicAdvocates,
    name: 'tech nordic advocates logo',
    width: '160vw',
  },
  {
    logo: yysLogo,
    name: 'Yksityisyrittäjäin Säätiö logo',
    width: '220vw',
  },
];

const Partners = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Typography variant='h3' className={classes.title}>
          Project Partners:
        </Typography>
        <div className={classes.logos}>
          {projectLogos.map((logo, index) => (
            <img key={index} src={logo.logo} alt={logo.name} width={logo.width} height='auto' />
          ))}
        </div>
        <Typography variant='h3' className={classes.title}>
          Ecosystem Partners:
        </Typography>
        <Grid container spacing={5} className={classes.logos}>
          {ecoSystemLogos.map((logo, index) => (
            <Grid item xs={8} sm={6} md className={classes.logo}>
              <img key={index} src={logo.logo} alt={logo.name} width={logo.width} height='auto' />
            </Grid>
          ))}
        </Grid>
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
    margin: '2em auto 7em',
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
    minWidth: '220px',
    maxWidth: '220px',
    minHeight: '220px',
    maxHeight: '220px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ecoLogo: {
    margin: 40,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  title: {
    fontFamily: 'Noto Serif Display',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
}));
