import React from 'react';

//Material-UI
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Game = ({ data }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={data.photo} title={data.title} />
        <div className={classes.iconContainer}>{data.icon}</div>
        <CardContent>
          <Typography variant='h6' className={classes.title}>
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Game;

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 320,
    maxWidth: 320,
    border: '1px solid #434343',
    borderRadius: '10px',
    margin: '2em auto',
    [theme.breakpoints.up('md')]: {
      minWidth: 320,
      maxWidth: 320,
      margin: '1em auto',
    },
    [theme.breakpoints.only('sm')]: {
      minWidth: 180,
      maxWidth: 180,
      margin: '1em auto',
    },
    '@media (min-width: 320px)': {
      minWidth: 300,
      maxWidth: 300,
    },
  },
  media: {
    height: 260,
    [theme.breakpoints.only('sm')]: {
      height: 140
    }
  },
  iconContainer: {
    minWidth: 120,
    maxWidth: 120,
    minHeight: 120,
    maxHeight: 120,
    [theme.breakpoints.only('sm')]: {
      minWidth: 110,
    maxWidth: 110,
    minHeight: 110,
    maxHeight: 110,
    },
    border: '1px solid #888',
    borderRadius: '50%',
    boxShadow: ' 0px 0px 22px -5px #434343',
    textAlign: 'center',
    margin: ' -4em auto 0',
    zIndex: 1,
    background: '#ffffff',
  },
  title: {
    textAlign: 'center',
    margin: '2em auto',
  },
}));
