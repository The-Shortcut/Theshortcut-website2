import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Typography,
} from '@material-ui/core';

const Goal = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <div style={{ minHeight: '100%' }}>
        <div style={window.innerWidth < 600 ? {display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end'} : null}>
          <div className={classes.iconContainer}>{data.icon}</div>
        <Typography variant='h5' className={classes.title} style={{textAlign:'center'}}>
            {data.target}
          </Typography>
          </div>
          {data.description.map((desc, i) => (
            <p key={i} className={classes.text}>
              {desc}
            </p>
          ))}
      </div>
    </Box>
  );
};

export default Goal;

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 345,
    maxWidth: 345,
    minHeight: 410,
    maxHeight: 410,
    background: '#F9F9F9',
    border: '1px solid #EEEEEE',
    borderRadius: '10px',
    boxShadow: ' 0px 0px 22px -5px #434343',
    margin: '2em auto',
   [theme.breakpoints.up('md')]: {
      minWidth: 380,
      maxWidth: 380,
      margin: '1em auto',
    },
    /*[theme.breakpoints.only('md')]: {
      minWidth: 290,
      maxWidth: 290,
      margin: '1em auto',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 480,
      maxHeight: 480,
    },
    '@media (min-width: 320px)': {
      minWidth: 300,
      maxWidth: 300,
    }, */
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
      margin: 0,
    },
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
  },
  text: {
    margin: '1.5em 1em',
    textAlign: 'center',
    fontSize: '0.9rem',
  }
}));
