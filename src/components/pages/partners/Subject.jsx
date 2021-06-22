import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Children
import Title from '../../custom/Title';

const Subject = ({ workRef }) => {
  const classes = useStyles();
  return (
    <section ref={workRef} className={classes.section}>
      <Title>How We Work</Title>
      <Typography variant='body1' className={classes.text}>
        We partner with both private and public organizations to provide much-needed professional
        training and integration programs. While many of the services that we offer are open to our
        entire community, some, like specialized training and coaching, are limited by many factors
        entirely determined by our partner organization requirements.
        <br /> If you would like to partner with us to offer training or services, use the contact
        form at the bottom of this page.
      </Typography>
    </section>
  );
};

export default Subject;

const useStyles = makeStyles((theme) => ({
  section: {
    margin: '6em auto',
  },
  text: {
    margin: 'auto',
    minWidth: '70%',
    maxWidth: '70%',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
  },
}));
