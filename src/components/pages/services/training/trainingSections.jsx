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
      <Typography variant='h6' style={{ textAlign: 'center', marginBottom: 40 }}>
        Previous Training Programs Completed
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
            <img src={item.partnerLogo} alt='partner logo' className={classes.logoContainer} />
            <CardContent className={classes.cardContent}>
              <Typography
                variant='body1'
                component='h3'
                style={{ fontWeight: 'bold', marginBottom: 20 }}>
                {item.title}
              </Typography>
              <Typography variant='subtitle2' component='p'>
                {item.description}
              </Typography>
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
    margin: ' 8em auto',
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '80%',
    maxWidth: '80%',
    /*  border: '2px solid red', */
    margin: 'auto',
  },
  card: {
    margin: '1em auto',
    maxWidth: 280,
    minHeight: 460,
    maxHeight: 460,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      minHeight: 490,
      maxHeight: 490,
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    borderRadius: '150%',
    maxWidth: '5em',
    minWidth: '5em',
    maxHeight: '5em',
    minHeight: '5em',
    display: 'absolute',
    margin: '-2.3em 0 0 14em',
    backgroundColor: '#EEE',
    boxShadow: ' 0px 0px 22px -5px #434343',
  },
}));
