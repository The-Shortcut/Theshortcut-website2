import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Button } from '@material-ui/core';



// Children
import Title from '../../custom/Title';
import Game from './Game';
import StartHere from './StartHere';

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
        <StartHere />
        {/* <Button color='primary' variant='contained' startIcon={<MdHelp />} className={classes.button}>
          How can we help
        </Button> */}
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
    margin: '10em auto 5em',
    border: '1px solid #f9f9f9',
    [theme.breakpoints.down('sm')]: {
      marginTop: '13em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '5em',
    },
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
    },
  },
  section: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
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
    margin: '0 auto',
    minWidth: '50%',
    maxWidth: '50%',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      minWidth: '80%',
      maxWidth: '80%',
    },
  },
  button: {
    display: 'flex',
    minWidth: '13.5em',
    maxWidth: '13.5em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: '14.5em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '15.5em',
    },
  },
}));
