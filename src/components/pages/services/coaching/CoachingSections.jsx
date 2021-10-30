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
          <Card key={index} className={classes.card}>
            <CardActionArea disabled={!item.active}>
              <CardContent className={classes.cardContent}>
                <div>{item.icon}</div>
                <Typography variant='h4' className={classes.title}>
                  {item.title.toLocaleUpperCase()}
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
                    {item.btnTitle}
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    /*  border: '2px solid red', */
    margin: 'auto',
  },
  card: {
    margin: 'auto',
    borderRadius: '10px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    overflow: 'hidden',
    textAlign: 'center',
    lineHeight: '1.5em',
    minHeight: '250px',
    maxHeight: '250px',
    '@media (max-width: 606px)': {
      minHeight: '215px',
      maxHeight: '215px',
    },
  },
  btn: {
    marginTop: 15,
  },
}));
