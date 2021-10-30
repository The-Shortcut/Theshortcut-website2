/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

// DATA
import { prevTrainingData } from '../servicesData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const PrevTrainingSections = () => {
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
              className={classes.media}
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PrevTrainingSections;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '85%',
    maxWidth: '85%',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(235px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '98%',
    maxWidth: '98%',
    /* border: '2px solid red', */
    margin: 'auto',
  },
  card: {
    margin: 'auto',
    borderRadius: '10px',
    /* maxWidth: 280, */
    minHeight: 550,
    maxHeight: 550,
    [theme.breakpoints.down('md')]: {
      minHeight: 520,
      maxHeight: 520,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      minHeight: 490,
      maxHeight: 490,
    },
    '@media (max-width:460px)': {
      minHeight: 450,
      maxHeight: 450,
    },
    zIndex: 1,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    height: 180,
    [theme.breakpoints.only('sm')]: {
      height: 140,
    },
    objectFit:'cover'
  },
  title: {
    minHeight: '50px',
    maxHeight: '50px',
    margin: '0 auto 0.5em',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      minHeight: '65px',
      maxHeight: '65px',
    },
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
