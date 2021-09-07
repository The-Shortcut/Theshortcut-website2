/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { trainingServiceData } from '../../../../actions/serviceActions';
const CurrTrainingSections = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { trainings } = useSelector((state) => state.services);

  useEffect(() => {
    if (!trainings) {
      dispatch(trainingServiceData());
    }
  }, [dispatch, trainings]);

  if (trainings?.length === 0) {
    return (
      <Typography variant='body1' className={classes.text}>
        <strong>Current opportunities</strong>
        <br />
        We are working hard to create more opportunities, check back later.
      </Typography>
    );
  }
  return (
    <div className={classes.root}>
      <Typography variant='h4' style={{ textAlign: 'center', margin: '2em auto' }}>
        Current opportunities
      </Typography>
      {trainings?.length < 3 && window.innerWidth > 860 ? (
        <div className={classes.container1}>
          {trainings?.map(({ acf }, index) => (
            <Card key={index} className={classes.card1}>
              <CardMedia style={{ flex: 1 }}>
                <img
                  src={acf.image.url}
                  alt={acf.title}
                  width='100%'
                  height='100%'
                  style={{ borderRadius: '5px 0 0 5px' }}
                />
              </CardMedia>
              <CardContent className={classes.cardContent1}>
                <Typography variant='h4' style={{ margin: '1em' }}>
                  {acf.title.toLocaleUpperCase()}
                </Typography>
                <Typography variant='subtitle1' component='p'>
                  {acf.description}
                </Typography>
                <Button variant='outlined' href={acf.link} className={classes.regBtn}>
                  Apply here
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className={classes.container}>
          {trainings?.map(({ acf }, index) => (
            <Card key={index} className={classes.card}>
              <CardMedia
                component='img'
                alt={acf.title}
                className={classes.media}
                image={acf.image.url}
                title={acf.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant='h4' className={classes.title}>
                  {acf.title.toLocaleUpperCase()}
                </Typography>
                <Typography variant='subtitle1' component='p'>
                  {acf.description}
                </Typography>
                <Button
                  variant='outlined'
                  color='primary'
                  href={acf.link}
                  className={classes.regBtn}>
                  Apply here
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrTrainingSections;

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
  container1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1: {
    maxWidth: '80%',
    minWidth: '80%',
    maxHeight: '20em',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
      minWidth: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      minWidth: '100%',
    },
    borderRadius: '10px',
    margin: '0 auto 2em',
    display: 'flex',
  },
  cardContent1: {
    flex: 1,
  },
  regBtn: {
    margin: '2em auto',
    display: 'flex',
    minWidth: '12em',
    maxWidth: '12em',
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
    minHeight: 510,
    maxHeight: 510,
    [theme.breakpoints.down('md')]: {
      minHeight: 500,
      maxHeight: 500,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      minHeight: 450,
      maxHeight: 450,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
      minHeight: 510,
      maxHeight: 510,
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
    height: 230,
    [theme.breakpoints.only('sm')]: {
      height: 140,
    },
    objectFit: 'fill',
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
