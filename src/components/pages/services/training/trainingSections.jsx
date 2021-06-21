/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

// DATA
import { prevTrainingData } from '../servicesData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const trainingSections = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h4' style={{ textAlign: 'center', margin: '2em auto' }}>
        Previous Training Programs
      </Typography>
      <div className={classes.container}>
        {prevTrainingData.map((item, index) => (
          <Card key={index} className={classes.card}>
            <CardMedia
              component='img'
              alt={item.title}
              height='35%'
              image={item.image}
              title={item.title}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant='h4' className={classes.title}>
                {item.title.toLocaleUpperCase()}
              </Typography>
              <Typography variant='subtitle1' component='p' className={classes.text}>
                {item.description}
              </Typography>
              {/* <img src={item.partnerLogo} alt='partner logo' className={classes.logoContainer} /> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default trainingSections;

const useStyles = makeStyles((theme) => ({
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
    margin: '3em auto 7em',
    border: '1px solid #DDDDDD',
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '98%',
    maxWidth: '98%',
    /* border: '2px solid red', */
    margin: 'auto',
  },
  card: {
    margin: '1em auto',
    borderRadius: '10px',
    /* maxWidth: 280, */
    minHeight: 520,
    maxHeight: 520,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      minHeight: 560,
      maxHeight: 560,
    },
    zIndex: 1,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    maxWidth: '5em',
    minWidth: '5em',
    maxHeight: '5em',
    minHeight: '5em',
    /* borderRadius: '150%',
    maxWidth: '5em',
    minWidth: '5em',
    maxHeight: '5em',
    minHeight: '5em',
    margin: '-2.3em 0 0 14em',
    backgroundColor: '#EEE',
    boxShadow: ' 0px 0px 22px -5px #434343',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '-2.3em',
    zIndex: 10, */
  },
  title: {
    minHeight: '50px',
    maxHeight: '50px',
    [theme.breakpoints.down('md')]: {
      minHeight: '65px',
      maxHeight: '65px',
    },
    margin: 'auto',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    minHeight: '190px',
    maxHeight: '190px',
    [theme.breakpoints.down('xs')]: {
      minHeight: '270px',
      maxHeight: '270px',
    },
    lineHeight: '1.5em',
  },
}));
