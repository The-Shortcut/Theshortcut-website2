import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const hardModules = [
  {
    title: 'Hard Skills',
    bgColor: 'none',
  },
  {
    title: 'Business',
    bgColor: '#6d9695',
  },
  {
    title: 'Digital marketing',
    bgColor: '#5b8987',
  },
  {
    title: 'Growth Marketing',
    bgColor: '#497c7a',
  },
  {
    title: 'Full-stack Development',
    bgColor: '#42706e',
  },
];

const softModules = [
  {
    title: 'Soft Skills',
    bgColor: 'none',
  },
  {
    title: 'Mentoring',
    bgColor: '#b86b6e',
  },
  {
    title: 'Emotional Resiliency',
    bgColor: '#ad5659',
  },
  {
    title: 'Neworking & Self-learning',
    bgColor: '#a34145',
  },
  {
    title: 'Inspirational Keynotes',
    bgColor: '#992c30',
  },
];

const ModulesSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Typography variant='h3' style={{ fontFamily: 'Noto Serif Display' }}>
        One Academy - Many Options
      </Typography>
      <div className={classes.container}>
        <Typography variant='body1' className={classes.info}>
          Our Academy has two main tracks: soft skills and hard skills. We expect our participants
          to take part in both to graduate from our Academy.
        </Typography>
        <Grid container spacing={2}>
          {hardModules.map((module, index) => (
            <Grid
              key={index}
              className={classes.item}
              style={{ backgroundColor: module.bgColor, color: module.textColor }}
              item
              xs={6}
              sm={2}>
              <Typography
                variant='subtitle1'
                style={{ fontFamily: 'Raleway', textAlign: 'center' }}>
                {module.title}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2}>
          {softModules.map((module, index) => (
            <Grid
              key={index}
              className={classes.item}
              style={{ backgroundColor: module.bgColor, color: module.textColor }}
              item
              xs={6}
              sm={2}>
              <Typography
                variant='subtitle1'
                style={{ fontFamily: 'Raleway', textAlign: 'center' }}>
                {module.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default ModulesSection;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#FDEFE4',
    padding: theme.spacing(11, 5),
    position: 'relative',
  },
  container: {
    border: '1px solid red',
    margin: 'auto',
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '90%',
    },
  },
  item: {
    color: '#fffcfa',
    minHeight: '7em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
    '&:nth-child(1)': {
      color: '#404040',
      alignItems: 'flex-start',
    },
  },
  info: {
    fontFamily: 'Raleway',
    color: '#FFFCFA',
    backgroundColor: '#404040',
    padding: theme.spacing(2),
    maxWidth: '14em',
    position: 'relative',
  },
}));
