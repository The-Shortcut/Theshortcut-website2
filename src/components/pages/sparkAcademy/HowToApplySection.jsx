import React from 'react';

// Image
import howToApplySection from '../../../assets/photos/sparkAcademy/howToApply.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const HowToApplySection = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <img src={howToApplySection} width='350px' height='auto' alt='How to apply section' />
        <div>
          <Typography variant='h3' className={classes.title}>
            How to Apply
          </Typography>
          <br />
          <Typography variant='body1' className={classes.text}>
            You can apply to take part in the full eight-month program or apply for individual study
            modules. The application form is the same in both cases. Regardless of how many modules
            you take, the soft skill training sessions will be available to you throughout the
            academic year.
            <br />
            <br />
            After submitting your application, we will do a phone interview to learn more about you.
            If you qualify, we will help you identify which modules make sense for your needs and
            help you build a curriculum that fits those.
            <br />
            <br />
            <span style={{ fontWeight: 'bolder' }}>
              The deadline for the application is 27 February, 2022
            </span>
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

export default HowToApplySection;

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
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '90%',
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
  text: {
    fontFamily: 'Raleway',
    paddingLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1px',
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
}));
