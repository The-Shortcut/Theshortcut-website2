import React from 'react';

// DATA
import { coachingData } from '../servicesData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActionArea, Typography, Button } from '@material-ui/core';

const CoachingSections = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {coachingData.map((item, index) => (
          <Card variant='outlined' key={index} className={classes.card}>
            <CardActionArea disabled={!item.active}>
              <CardContent className={classes.cardContent}>
                <img className={classes.imageContainer} src={item.image} alt={item.title} />
                <Typography variant='h4' className={classes.title}>
                  {item.title}
                </Typography>
                <Typography variant='subtitle1' component='p' className={classes.text}>
                  {item.description}
                </Typography>
                {item.active && (
                  <Button
                    variant='outlined'
                    color='primary'
                    className={classes.btn}
                    href={item.link}
                    target='_blank'>
                    Find Out More
                  </Button>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoachingSections;

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
    margin: '5em auto',
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
   /*  border: '2px solid red', */
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
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '150%',
    maxWidth: '9em',
    minWidth: '9em',
    maxHeight: '9em',
    minHeight: '9em',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
    backgroundColor: '#fff',
  },
  title: {
    minHeight: '40px',
    maxHeight: '40px',
    margin: '1em auto',
    textAlign: 'center',
  },
  text: {
    minHeight: '190px',
    maxHeight: '190px',
    [theme.breakpoints.down('xs')]: {
      minHeight: '270px',
      maxHeight: '270px',
    },
    lineHeight: '1.5em',
  },
  btn: {
    marginTop: 35,
  },
}));
