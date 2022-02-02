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
            You can apply to take part in either the full eight-month program or to an individual
            study module. Like all programs at The Shortcut, the Spark Academy is free for all
            participants.
            <br />
            <br />
            <span style={{ fontWeight: 'bolder' }}>
              Applications will open on Thursday, 3rd of February 2022.
            </span>
            <br />
            <br />
            You can apply to one or all of the academic modules. Running in parallel to the academic
            modules applicants will also be provided career coaching, emotional resilience training,
            inspirational keynotes, entrepreneurship mentoring and career clinic sessions, and
            networking.
            <br />
            After submitting your application, we will do a phone interview to learn more about you.
            If you qualify, we help you identify which courses make sense for your needs and help
            you find a schedule that fits you.
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
