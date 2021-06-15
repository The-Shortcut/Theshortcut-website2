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
          <Typography variant='h4' className={classes.title}>
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
    minHeight: 410,
    maxHeight: 410,
    borderRadius: '10px',
  },
  media: {
    height: 180,
    [theme.breakpoints.only('sm')]: {
      height: 140,
    },
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
    margin: '1.4em auto 0',
  },
}));
