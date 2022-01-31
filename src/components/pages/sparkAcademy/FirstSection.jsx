import React from 'react';

// Image
import firstSection from '../../../assets/photos/sparkAcademy/itsTimeToIgniteYourFire.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const FirstSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <img
          src={firstSection}
          width='280px'
          height='auto'
          className={classes.image}
          alt='its-time-to-ignite-your-fire'
        />
        <div>
          <Typography variant='h3' className={classes.title}>
            It's time to ignite your fire!
          </Typography>
          <br />
          <Typography variant='body1' className={classes.text}>
            Welcome to our program to fight gender imbalance in the startup ecosystem.
            <br />
            <br />
            Our Spark Academy is pulling back the curtains of the startup ecosystem to get more
            diversity into the Finnish world of entrepreneurship and innovation.
            <br />
            <br />
            In our meaningful, practical and intentional program you can learn the most important
            skills for entrepreneurship, marketing and full-stack development.
            <br />
            <br />
            We want to teach the critical skill sets to build a solid pipeline of future female and
            non-binary founders and team members.
          </Typography>
          {/* <Button
        href='#'
        target='_blank'
        rel='noopener noreferrer'
        variant='contained'
        color='primary'
        className={classes.applyBtn}>
        APPLY NOW
      </Button> */}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#FDEFE4',
    padding: theme.spacing(11, 5),
  },
  container: {
    margin: 'auto',
    maxWidth: '80%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'strech',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  title: {
    fontFamily: 'Noto Serif Display',
    paddingLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      fontSize:'1.5rem'
    },
  },
  applyBtn: {
    minWidth: '15em',
    maxWidth: '15em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      marginTop: 12,
    },
    color: '#fff',
    backgroundColor: '#497C7A',
  },
  text: {
    fontFamily: 'Raleway',
    paddingLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1px',
    },
  },
}));
