import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Children
import Title from '../../../custom/Title';
import MainSections from './MainSections';

const Coaching = () => {
  const classes = useStyles();
  return (
      <section className={classes.intro}>
        <Title>COACHING</Title>
        <Typography variant='body1' className={classes.text}>
        It is a long established fact that a reader will be distracted by the readable content of
        a page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text,
        </Typography>
      <MainSections />
      </section>

  );
};

export default Coaching;

const useStyles = makeStyles((theme) => ({
  intro: {
    /* border:'2px solid red' */
  },
  text: {
    margin: 'auto',
    minWidth: '50%',
    maxWidth: '50%',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      minWidth: '80%',
    maxWidth: '80%',
    }
  },
}));
