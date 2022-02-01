import React from 'react';

// Image
import howToApplySection from '../../../assets/photos/sparkAcademy/howToApply.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const HowToApplySection = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <img
          src={howToApplySection}
          width='350px'
          height='auto'
          alt='How to apply section'
        />
        <div>
          <Typography variant='h3' className={classes.title}>
            How to Apply
          </Typography>
          <br />
          <Typography variant='body1' className={classes.text}>
            You can apply to take part in either the full eight-month program or to an individual
            study module.
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
