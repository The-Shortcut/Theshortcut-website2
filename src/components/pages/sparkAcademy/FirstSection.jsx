import React from 'react';

// Image
import firstSection from '../../../assets/photos/sparkAcademy/firstSection.jpg';

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
          width='350px'
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
            The Finnish startup world can feel like a closed environment.
            <br />
            <br />
            Our Spark Academy is pulling back the curtains of the startup ecosystem to make the
            world of entrepreneurship and innovation more accessible and inclusive to everyone.
            <br />
            <br />
            In our meaningful, practical, and intentional program, you can learn the most important
            skills for entrepreneurship, marketing, and full-stack development to help you start
            your own business or kickstart your career in a startup or scaleup.
            <br />
            <br />
            We want to teach the critical skill sets to build a solid pipeline of future female and
            non-binary founders and team members.
          </Typography>
          <br />
          <br />
          <Button
            href='https://theshortcut1.typeform.com/to/HaY1NdEJ'
            target='_blank'
            rel='noopener noreferrer'
            variant='contained'
            className={classes.applyBtn}>
            APPLY NOW
          </Button>
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
      fontSize: '1.5rem',
    },
  },
  applyBtn: {
    backgroundColor: '#497C7A',
    color: '#FDEFE4',
    fontFamily: 'Raleway',
    width: '40%',
    [theme.breakpoints.up('xs')]: {
      width: '60%',
    },
    fontWeight: 'bolder',
    fontSize: '1.2rem',
    padding: 10,
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '1px',
    },
    '&:hover': {
      backgroundColor: '#60aba8',
    },
  },
  text: {
    fontFamily: 'Raleway',
    paddingLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1px',
    },
  },
}));
