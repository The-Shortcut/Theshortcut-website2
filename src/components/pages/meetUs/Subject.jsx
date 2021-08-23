import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Children
import Title from '../../custom/Title';

const Subject = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Title>Book A Meeting With Us</Title>
      <Typography variant='body1' className={classes.text}>
        Life doesn't stop just because of the worsening Covid situation! This is why we are excited
        to create 1-on-1 meetings for you with the knowledgeable staff here at The Shortcut! Each
        person has their own area of expertise which you will find listed next to their picture.
        Just click and you will be linked to their availability calendar. Book soon as hours are
        limited!
      </Typography>
    </section>
  );
};

export default Subject;

const useStyles = makeStyles((theme) => ({
  section: {
    margin: '6em auto',
    minWidth: '80%',
    maxWidth: '80%',
  },
  text: {
    margin: 'auto',
    minWidth: '80%',
    maxWidth: '80%',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      maxWidth: '100%',
    },
  },
}));
