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
  );
};

export default GetInTheGame;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    marginTop: '5em',
    maxWidth: '70%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
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
