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
        <Typography
          variant='body1'
          style={{ margin: 'auto', textAlign: 'center', maxWidth: '80%' }}>
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
    margin: '8em auto',
    [theme.breakpoints.down('md')]: {
      minWidth: '90%',
      maxWidth: '90%',
      margin: '4em auto',
    },
  },
  container: {
    minWidth: '100%',
    display: 'flex',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(4),
    },
  },
}));
