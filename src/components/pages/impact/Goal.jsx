import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const Goal = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <div style={{ minHeight: '100%' }}>
        <div
          style={
            window.innerWidth < 600
              ? { display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end' }
              : null
          }>
          <div className={classes.iconContainer}>{data.icon}</div>
          <Typography variant='h4' className={classes.title}>
            {data.target}
          </Typography>
        </div>
        {data.description.map((desc, i) => (
          <Typography variant='subtitle1' component='p' key={i} className={classes.text}>
            {desc}
          </Typography>
        ))}
      </div>
    </Box>
  );
};

export default Goal;

const useStyles = makeStyles((theme) => ({
  card: {

    minHeight: 410,
    maxHeight: 410,
    background: '#F9F9F9',
    border: '1px solid #EEEEEE',
    borderRadius: '10px',
    boxShadow: ' 0px 0px 22px -5px #434343',
    margin: '2em auto',
    [theme.breakpoints.down('xs')]: {
      minHeight: 385,
      maxHeight: 385,
    },
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '150%',
    maxWidth: '7em',
    minWidth: '7em',
    maxHeight: '7em',
    minHeight: '7em',
    margin: '-3em auto 1.5em',
    [theme.breakpoints.down('xs')]: {
      margin: '1em 0 0 0',
    },
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
  },
  text: {
    margin: '1.5em 1em',
    textAlign: 'center',
  },
}));
