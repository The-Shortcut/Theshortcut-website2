import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const MemberCard = ({ item, index }) => {
  const classes = useStyles();
  const [state, setState] = useState(-1);
  return (
    <div>
      {state === index && <div className={classes.icons}>icons are here</div>}
      <Card
        className={classes.card}
        key={index}
        onMouseEnter={() => setState(index)}
        onMouseLeave={() => setState(-1)}>
        <img className={classes.media} src={item.acf.image} alt={item.acf.name} />
        <CardContent>
          <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
            {item.acf.name}
          </Typography>
          <Typography variant='subtitle2'>{item.acf.position}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MemberCard;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '70%',
    maxWidth: '70%',
    margin: '5em auto',
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
  },
  container: {
    minWidth: '100%',
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fill, 180px)',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  card: {
    maxWidth: '13em',
    minWidth: '13em',
    height: '23em',
    margin: '0 auto 1em',
    borderRadius: '15px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '12em',
      minWidth: '12em',
      height: '23em',
      margin: 'auto',
      borderRadius: 0,
    },
    '&:hover': {
      filter: 'brightness(40%)',
      transition: '.5s ease',
    },
  },
  icons: {
    position: 'absolute',
    zIndex: 1,
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
    filter: 'brightness(100%)',
    color: theme.palette.primary.main,
    backgroundColor: '#fff',
    marginTop: '11em',
    marginLeft: '2em',
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-100%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  media: {
    width: '100%',
    height: 200,
    borderRadius: '15px 15px 0 0',
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
    },
  },
}));
