import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const Goal = ({ data }) => {
    console.log(data)
  const classes = useStyles();
  return <div className={classes.container}></div>;
};

export default Goal;

const useStyles = makeStyles((theme) => ({
  container: {},
}));
