import React from 'react';

// DATA
import { ImpactStatData } from './impactData';

// children
import Title from '../../custom/Title';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const ImpactStatistics = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title>Driven by Impact</Title>
      <div className={classes.container}>
        {ImpactStatData.map((item, index) => (
          <div key={index} className={classes.item}>
            <div className={classes.icon}>{item.icon}</div>
            <div className={classes.values}>
              <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
                {item.amount}
              </Typography>
              <Typography variant='subtitle2' style={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStatistics;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80%',
    margin: 'auto',
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(4 , 1fr)',
    [theme.breakpoints.only('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignItems: 'start',
  },
  item: {
    alignSelf: 'center',
    justifySelf: 'center',
    minWidth: '18em',
    maxWidth: '18em',
    minHeight: 'auto',
    [theme.breakpoints.down('xs')]: {
      justifySelf: 'start',
      alignSelf: 'start',
      minWidth: '12em',
      maxWidth: '12em',
      minHeight: '5.2em',
    },
    border: '1px solid #00A99D',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    marginRight: '1em',
    marginLeft:'0.5em'
  },
}));
