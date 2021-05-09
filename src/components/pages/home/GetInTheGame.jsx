import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
// Children
import Title from '../../custom/Title';
import Game from './Game';

// Data
import { gameData } from './gameData';

const GetInTheGame = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Title>We Get You In The Game</Title>
        <div className={classes.section}>
          {gameData.map((data, index) => (
            <Link to={data.path} className={classes.link} key={index}>
              <Game data={data} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInTheGame;

const useStyles = makeStyles((theme) => ({
  main: {
    background: '#DDDDDD',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  root: {
    minWidth: '70%',
    maxWidth: '70%',
    margin: '8em auto 5em',
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
    display: 'flex',
    flexBasis: 'row',
    flexWrap: 'wrap',
  },
  link: {
    textDecoration: 'none',
    margin: 'auto',
  },
}));
