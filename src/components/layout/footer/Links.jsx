import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const Links = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.aboutSection}>
        <Typography variant='h6' className={classes.headTitle}>
          About Us
        </Typography>
        <Typography variant='body2' className={classes.item}>
          FAQ
        </Typography>
        <Typography variant='body2' className={classes.item}>
          Code of Conduct
        </Typography>
        <Typography variant='body2' className={classes.item}>
          Values & Principles
        </Typography>
        <Typography variant='body2' className={classes.item}>
          Terms of use
        </Typography>
        <Typography variant='body2' className={classes.item}>
          Privacy Policy
        </Typography>
      </div>
      <div className={classes.joinSection}>
        <Typography variant='h6' className={classes.headTitle}>
          Join Us
        </Typography>
        <Typography variant='body2' className={classes.item}>
          Events
        </Typography>
        <Typography variant='body2' className={classes.item}>
          Join Community
        </Typography>
        <Typography variant='body2' className={classes.item}>
          Work with Us
        </Typography>
      </div>
      <div className={classes.resources}>
        <Typography variant='h6' className={classes.headTitle}>
          Resources
        </Typography>
        <Typography variant='body2' className={classes.item}>
          For Partners
        </Typography>
        <Typography variant='body2' className={classes.item}>
          Blogs
        </Typography>
        <Typography variant='body2' className={classes.item}>
          For media
        </Typography>
        <Typography variant='body2' className={classes.item}>
          White paper
        </Typography>
      </div>
    </div>
  );
};

export default Links;

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    flex: 2,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: '5em',
    [theme.breakpoints.down('sm')]: {
      flex: 1,
      justifyContent: 'space-between',
      marginTop: '1em',
    },
  },
  headTitle: {
    marginBottom: '1em',
  },
  item: {
    paddingBottom: '5px',
  },
}));
