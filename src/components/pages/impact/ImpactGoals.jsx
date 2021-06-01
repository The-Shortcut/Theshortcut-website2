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
      {impactGoals.map((goal, index) => (
        <div key={index}>
          <Goal data={goal} />
        </div>
      ))}
    </div>
  );
};

export default ImpactGoals;

const useStyles = makeStyles((theme) => ({
  root: {},
}));
