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
        Our work at the Shortcut doesn't stop because of the worsening Covid situation! While our
        lab is closed, you can book 1-on-1 meetings with our knowledgeable staff. Every person has
        their own areas of expertise they can talk to you about. You can find them listed underneath
        their picture. Just click "Book a Meeting" and you will be sent to their calendar. Make sure
        to book soon because the time slots are limited!
      </Typography>
      <br />
      <Typography variant='body1' className={classes.text}>
        <strong>Please Read Before Booking:</strong> These meetings are meant for mentoring or
        networking and are reserved for our community members. If you have other items to discuss
        (sales, partnership, etc.)
      </Typography>
      <Typography variant='body1' className={classes.text}>
        please reach out to us via email.
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
