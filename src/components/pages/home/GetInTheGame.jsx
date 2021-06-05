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
    <div id='title' className={classes.main}>
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
    marginTop: '15em',
    paddingTop: '5px',
    paddingBottom: '5px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5em',
    },
  },
  root: {
    minWidth: '80%',
    maxWidth: '80%',
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    /*  [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
    }, */
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
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
}));
