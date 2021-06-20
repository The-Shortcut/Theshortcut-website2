import React from 'react';

// DATA
import { impactGoals } from './impactData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

// Children
import Title from '../../custom/Title';
import Goal from './Goal';

const ImpactGoals = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title>Impact Goals</Title>
      <div className={classes.container}>
        {impactGoals.map((goal, index) => (
          <div key={index}>
            <Goal data={goal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactGoals;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
    margin: '5em auto',
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    /*     border: '2px solid red', */
    margin: '5em auto',
  },
}));
