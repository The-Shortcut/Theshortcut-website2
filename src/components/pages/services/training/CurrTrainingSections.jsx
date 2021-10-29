/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@material-ui/core';

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
{/*       {trainings?.length < 3 && window.innerWidth > 860 ? (
        <div className={classes.container1}>
          {trainings?.map(({ acf }, index) => (
            <Card key={index}  sx={{ display: 'flex' }}>
              <CardMedia
                component='img'
                image={acf.image.url}
                alt={acf.title}
                sx={{ width: 151 }}
              />
               <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant='h4'>
                  {acf.title.toLocaleUpperCase()}
                </Typography>
                <Typography variant='subtitle1' component='p'>
                  {acf.description}
                </Typography>
                <Button variant='outlined' href={acf.link} className={classes.regBtn}>
                  Apply here
                </Button>
              </CardContent>
              </Box>
            </Card>
          ))}
        </div>
      ) : ( */}
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
                <Typography variant='subtitle1' component='p' className={classes.description}>
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
{/*       )} */}
    </div>
  );
};

export default CurrTrainingSections;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '70%',
    maxWidth: '70%',
    [theme.breakpoints.down('md')]: {
      minWidth: '80%',
      maxWidth: '80%',
    },
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
    position: 'absolute',
    bottom: 0,
    minWidth: '12em',
    maxWidth: '12em',
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '90%',
    maxWidth: '90%',
    margin: 'auto',
    /* border: '2px solid red', */
  },
  card: {
    margin: 'auto',
    borderRadius: '10px',
    minHeight: 500,
    maxHeight: 500,
    position: 'relative',
/*     [theme.breakpoints.down('md')]: {
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
    }, */
    zIndex: 1,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    objectFit: 'fill',
    minHeight: '220px',
    maxHeight: '220px',
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
  description: {
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 5,
    wordBreak: 'break-all',
    overflow: 'hidden',
  }
}));
