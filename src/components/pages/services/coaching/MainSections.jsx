import React from 'react';

// DATA
import { mainData } from './coachingData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActionArea, Typography, Button } from '@material-ui/core';

const MainSections = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {mainData.map((item, index) => (
          <Card variant='outlined' key={index} className={classes.card}>
            <CardActionArea disabled={!item.active}>
              <CardContent className={classes.cardAction}>
                <img className={classes.imageContainer} src={item.image} alt={item.title} />
                <Typography component='p' className={classes.title}>
                  {item.title}
                </Typography>
                <Typography variant='subtitle1' className={classes.text}>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. as opposed to using 'Content here,
                  content here', making it look like readable English.
                </Typography>
                {item.active && (
                  <Button variant='outlined' color='primary' className={classes.btn}>
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

export default MainSections;

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
    margin:'auto'
  },
  card: {
    margin: '1em auto',
    maxWidth: 280,
    minHeight: 490,
    maxHeight: 490,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      minHeight: 510,
      maxHeight: 510,
    },
  },
  cardAction: {
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
    maxWidth: '80%',
    lingHeight: 'normal',
  },
  btn: {
    marginTop: 15,
  },
  line: {
    minWidth: '1em',
    maxWidth: '1em',
    height: '10em',
    backgroundColor: '#434343',
  },
}));
