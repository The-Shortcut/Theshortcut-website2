import React from 'react';

// Image
import secondSection from '../../../assets/photos/sparkAcademy/whoIsItFor.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const SecondSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div>
          <Typography variant='h3' className={classes.title}>
            Who Is It For
          </Typography>
          <br />
          <Typography variant='body1' className={classes.text}>
            If you ever felt like there is no entry point for you in a male-dominated startup
            ecosystem, this is the program for you. We give you the skills, tools and network you
            need to start your own business or work with innovative products and services as a team
            member.
            <br />
            We invite anyone who identifies as a woman or non-binary person to join this journey
            towards igniting your spark.
          </Typography>
          <div style={{ textAlign: 'center', color: '#FFFCFA', margin: 30 }}>
            <Typography variant='h4' style={{ fontFamily: 'Raleway' }}>
              “The Finnish startup ecosystem is known worldwide for innovation and bravery. We have
              a responsibility to ensure our ecosystem reflects the world in which we live, holding
              our brand high, and innovations higher.”
            </Typography>
            <Typography variant='subtitle1' style={{ fontFamily: 'Raleway' }}>
              - Kristina Sweet, CEO of The Shortcut
            </Typography>
          </div>
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
        <img
          src={secondSection}
          width='280px'
          height='auto'
          className={classes.image}
          alt='its-time-to-ignite-your-fire'
        />
      </div>
    </section>
  );
};

export default SecondSection;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#497C7A',
    padding: theme.spacing(11, 5),
  },
  container: {
    maxWidth: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'strech',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  title: {
    fontFamily: 'Noto Serif Display',
    color: '#FFFCFA',
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
    },
  },
  text: {
    color: '#fffcfa',
    fontFamily: 'Raleway',
    paddingRight: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '1px',
    },
  },
}));
