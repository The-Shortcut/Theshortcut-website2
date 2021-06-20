import React from 'react';

import { sections } from './statData';
import Title from '../../custom/Title';
import Section from './Section';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const MainSections = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Title>Welcome To Our Community!</Title>
        <Typography variant='body1' className={classes.intro}>
          There is no Shortcut without the community! <br />
          The reason we create events, design trainings, negotiate partnership deals, etc is because
          we want the best for our community and those who will benefit from joining it. There are
          many ways for you to become a part of this supportive, creative, and driven community!
        </Typography>
        <div className={classes.container}>
          {sections.map((section, index) => (
            <Section key={index} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSections;

const useStyles = makeStyles((theme) => ({
  main: {
    background: '#DDDDDD',
    border: '2px solid #DDDDDD',
  },
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
    margin: '5em auto',
  },
  intro: {
    margin: 'auto',
    textAlign: 'center',
    maxWidth: '80%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
    },
  },
  container: {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    /*     border: '2px solid red', */
    margin: '5em auto',
  },
}));
