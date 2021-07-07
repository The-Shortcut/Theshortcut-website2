import React from 'react';

// DATA
import { ImpactStatData } from './impactData';

// children
import Title from '../../custom/Title';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const ImpactStatistics = ({drivenRef}) => {
  const classes = useStyles();

  return (
    <div ref={drivenRef} className={classes.root}>
      <Title>Driven by Impact</Title>
      <div className={classes.container}>
        {ImpactStatData.map((item, index) => (
          <div key={index} className={classes.item}>
            <div className={classes.icon}>{item.icon}</div>
            <Typography variant='h4' style={{marginTop: 10}}>{item.amount}</Typography>
            <Typography variant='body1' style={{ textAlign: 'center' }}>
              {item.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactStatistics;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    margin: '9em auto 7em',
    [theme.breakpoints.up('md')]: {
      minWidth: '70%',
    maxWidth: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
      margin:'3em auto'
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(4, minmax(120px, 1fr))',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, minmax(140px, 1fr))',
    },
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    margin: 'auto',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    minWidth: 70,
    maxWidth: 70,
    minHeight: 70,
    maxHeight: 70,
    [theme.breakpoints.down('sm')]: {
      minWidth: 60,
      maxWidth: 60,
      minHeight: 60,
      maxHeight: 60,
    },
    border: '1px solid #888',
    borderRadius: '50%',
    boxShadow: ' 0px 0px 22px -5px #434343',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
