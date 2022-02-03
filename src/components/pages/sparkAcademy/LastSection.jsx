import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const LastSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <Typography variant='h3' style={{ fontFamily: 'Raleway' }}>
          Got Questions? Reach out to our Project Manager:
        </Typography>
        <Typography variant='h3' style={{ fontFamily: 'Raleway' }}>
          julia.liao@theshortcut.org
        </Typography>
        <br />
        <br />
        <Typography variant='body1' style={{ fontFamily: 'Raleway' }}>
          Application deadline: 27 February 2022
        </Typography>
      </div>
    </section>
  );
};

export default LastSection;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#497C7A',
    padding: theme.spacing(11, 5),
    marginBottom: '-4em',
  },
  container: {
    color: '#fffcfa',
    maxWidth: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '90%',
    },
  },
}));
