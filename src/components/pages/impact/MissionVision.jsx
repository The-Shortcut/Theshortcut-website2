import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Children
import Title from '../../custom/Title';
const MissionVision = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.mission}>
          <Title>Our Mission</Title>
          <Typography variant='body1' component='p' className={classes.text}>
            To equip our community with insights and skills to build meaningful careers and
            integrate professionally.
          </Typography>
        </div>
        <div className={classes.vision}>
          <Title>Our Vision</Title>
          <Typography variant='body1' component='p' className={classes.text}>
            To become Finland’s most highly regarded and effective platform for professional
            identity- and prospect-building.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;

const useStyles = makeStyles((theme) => ({
  main: {
    background: '#DDDDDD',
    border: '2px solid #DDDDDD',
    margin: '6em auto',
  },
  container: {
    margin: '6em auto',
  },
  vision: {
    marginTop: theme.spacing(10),
  },
  text: {
    textAlign: 'center',
    margin: 'auto 1em',
  },
}));
