import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Children
import Title from '../../custom/Title';
import Game from './Game';

// Data
import { gameData } from './gameData';

const GetInTheGame = ({ gamesRef }) => {
  const classes = useStyles();

  return (
    <div ref={gamesRef} className={classes.main}>
      <div className={classes.root}>
        <Title>We Get You In The Game</Title>
        <Typography variant='body1' className={classes.text}>
          Welcome to The Shortcut! Take your next step to reach your professional goals with us. You
          can upskill and pivot your career through events, coaching, and training in our vibrant
          community!
        </Typography>
        <div className={classes.section}>
          {gameData.map((data, index) => (
            <a href={data.path} className={classes.link} key={index}>
              <Game data={data} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInTheGame;

const useStyles = makeStyles((theme) => ({
  main: {
    margin: '10em auto 7em',
    border: '1px solid #FFFFFF',
  },
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    margin: '1em auto',
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
      marginTop: '3em',
    },
  },
  section: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    /*     border: '2px solid red', */
    margin: 'auto',
  },
  link: {
    textDecoration: 'none',
    /*     border: '2px solid red', */
    flexBasis: '23%',
    [theme.breakpoints.down('xs')]: {
      flexBasis: '90%',
      marginTop: theme.spacing(4),
    },
    '@media (max-width: 320px)': {},
  },
  text: {
    margin: '0 auto 3em',
    minWidth: '50%',
    maxWidth: '50%',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      minWidth: '80%',
      maxWidth: '80%',
    },
  },
}));
