import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const schedule = [
  { month: '27 February', agenda: 'Application Deadline' },
  { month: 'Beginning of March', agenda: 'Candidate screening and selection' },
  {
    month: '21 March - 1 April',
    agenda: 'Kick-Off Weeks with Inspirational Coaching and Workshops',
  },
  { month: '4 - 29 April', agenda: 'Module 1 - Entrepreneurship 101' },
  { month: '2 May - 17 June', agenda: 'Module 2 - Digital Marketing & Growth Hacking' },
  { month: '15 August - 16 December', agenda: 'Module 3 - Full-stack Development' },
];

const TheSchedule = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Typography variant='h3' className={classes.title}>
        The Schedule
      </Typography>
      <br />
      <br />
      <div className={classes.container}>
        {schedule.map((item, index) => (
          <Typography key={index} variant='body1' className={classes.text}>
            <span style={{ fontWeight: 'bold' }}>{item.month}:</span> <span>{item.agenda}</span>
          </Typography>
        ))}
      </div>
    </section>
  );
};

export default TheSchedule;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#497C7A',
    color: '#FDEFE4',
    padding: theme.spacing(11, 5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Noto Serif Display',
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      fontSize: '1.5rem',
    },
  },
  container: {
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  text: {
    color: '#fffcfa',
    fontFamily: 'Raleway',
    paddingRight: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '1px',
    },
    textAlign: 'left',
    padding: 10,
  },
}));
