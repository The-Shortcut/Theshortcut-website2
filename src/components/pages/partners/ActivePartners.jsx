import React from 'react';

// DATA
import { partnersData } from './partnersData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const ActivePartners = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {partnersData.map((data, index) => (
        <section
          key={index}
          className={classes.section}
          style={index % 2 === 1 ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
          <div className={classes.text}>
            <div className={classes.title}>
              <img src={data.logo} alt={data.title} width='120px' height='70px' />
              <Typography variant='h5' style={{ marginLeft: 15 }}>
                {data.name}
              </Typography>
            </div>
            <Typography variant='subtitle1' className={classes.desc}>
              {data.description}
            </Typography>
          </div>
          <img src={data.photo} alt={data.title} className={classes.photo} />
        </section>
      ))}
    </div>
  );
};

export default ActivePartners;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    margin: '0 auto 5em',
  },
  section: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    margin: '2em auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  text: {
    flexBasis: '55%',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
    /* border: '1px solid red', */
  },
  desc: {
    padding: 10,
    maxWidth: '80%',
    margin: 'auto',
    textAlign: 'justify',
    color: '#FFFFFF',
  },
  photo: {
    flexBasis: '45%',
    width: '100%',
    height: '20em',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
