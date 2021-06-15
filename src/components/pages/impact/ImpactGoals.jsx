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
    margin: '5em auto 10em',
  },
  container: {
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
      display: 'grid',
      gridGap: '10px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
      gridTemplateRows: 'none',
      justifyContent: 'center',
      alignContent: 'center',
  /*     border: '2px solid red', */
      margin:'5em auto'
  },
}));
