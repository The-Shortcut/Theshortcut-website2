import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// DATA
import { values } from './valuesData';

// Children
import Title from '../../custom/Title';

const CoreValues = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.root}>
        <Title>Core Values</Title>
        <div className={classes.container}>
          {values.map((value, index) => (
            <div key={index} className={classes.item}>
              <div className={classes.icon}>{value.icon}</div>
              <Typography variant='h4' className={classes.title}>
                {value.title}
              </Typography>
              <Typography variant='body1' className={classes.text}>
                {value.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div id='successStories' />
    </section>
  );
};

export default CoreValues;

const useStyles = makeStyles((theme) => ({
  section: {
    background: '#DDDDDD',
    margin: '7em auto',
    border: '1px solid #DDD',
  },
  root: {
    maxWidth: '70%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
      marginBottom: theme.spacing(5),
    },
    margin: '5em auto',
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    margin: '3em auto',
  },
  item: {
    /* border: '2px solid #00A99D', */
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '150%',
    maxWidth: '11em',
    minWidth: '11em',
    maxHeight: '11em',
    minHeight: '11em',
    margin: '1em auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '8em',
      minWidth: '8em',
      maxHeight: '8em',
      minHeight: '8em',
    },
    backgroundColor: '#fff',
    boxShadow: ' 0px 0px 22px -5px #434343',
  },
  title: {
    textAlign: 'center',
  },
  text: {
    margin: '1.5em 1em',
    textAlign: 'center',
    /* fontSize: '0.9rem', */
  },
}));
