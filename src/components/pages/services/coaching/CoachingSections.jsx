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
                <Typography variant="h6">
                  {item.title}
                </Typography>
                <Typography variant='subtitle1' className={classes.text}>
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
    margin: '5em auto',
  },
  container: {
    /* display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5em auto',
    minWidth: '80%',
    maxWidth: '80%',
    border: '2px solid red', */
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
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: '1em auto',
  },
  text: {
    textAlign: 'center',
    lingHeight: 'normal',
    minHeight: '200px',
  },
  btn: {
    margin: 0,
  },
  line: {
    minWidth: '1em',
    maxWidth: '1em',
    height: '10em',
    backgroundColor: '#434343',
  },
}));
