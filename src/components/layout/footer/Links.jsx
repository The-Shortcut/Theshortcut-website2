import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const Links = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.aboutSection}>
        <Link to='/about' className={classes.link}>
          <Typography variant='h4' className={classes.headTitle}>
            About Us
          </Typography>
        </Link>
        <a href='/about/#faq' className={classes.link}>
          <Typography variant='subtitle1' component='p' className={classes.item}>
            FAQ
          </Typography>
        </a>
        <a href='/about/#core-values' className={classes.link}>
          <Typography variant='subtitle1' component='p' className={classes.item}>
            Core Values
          </Typography>
        </a>
        <Link to='/code' className={classes.link}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.item}
            onClick={() => window.scrollTo(0, 0)}>
            Code of Conduct
          </Typography>
        </Link>
        <Link to='/terms' className={classes.link}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.item}
            onClick={() => window.scrollTo(0, 0)}>
            Terms of use
          </Typography>
        </Link>
        <Link to='/privacy' className={classes.link}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.item}
            onClick={() => window.scrollTo(0, 0)}>
            Privacy Policy
          </Typography>
        </Link>
      </div>
      <div className={classes.joinSection}>
        <Typography variant='h4' className={classes.headTitle}>
          Join Us
        </Typography>
        <Link to='/events/all' className={classes.link}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.item}
            onClick={() => window.scrollTo(0, 0)}>
            Events
          </Typography>
        </Link>
        <Link to='/community' className={classes.link}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.item}
            onClick={() => window.scrollTo(0, 0)}>
            Join Community
          </Typography>
        </Link>
        {/* <Typography variant='subtitle1' component='p' className={classes.item}>
          Work with Us
        </Typography> */}
      </div>
      <div className={classes.resources}>
        <Typography variant='h4' className={classes.headTitle}>
          Resources
        </Typography>
        <Link to='/partners' className={classes.link}>
          <Typography
            variant='subtitle1'
            component='p'
            className={classes.item}
            onClick={() => window.scrollTo(0, 0)}>
            For Partners
          </Typography>
        </Link>
        <Typography variant='subtitle1' component='p' className={classes.item}>
          Blog
        </Typography>
       {/*  <Typography variant='subtitle1' component='p' className={classes.item}>
          For media
        </Typography>
        <Typography variant='subtitle1' component='p' className={classes.item}>
          White paper
        </Typography> */}
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
  link: {
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  headTitle: {
    marginBottom: '1em',
  },
  item: {
    paddingBottom: '5px',
  },
}));
