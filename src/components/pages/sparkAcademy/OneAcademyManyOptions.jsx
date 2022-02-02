import React from 'react';

// Image
import secondSection from '../../../assets/photos/sparkAcademy/manyOptions.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const OneAcademyManyOptions = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div>
          <Typography variant='h3' className={classes.title}>
            One Academy - Many Options
          </Typography>
          <br />
          <Typography variant='body1' className={classes.text}>
            The Shortcut Spark Academy is a free eight-month program for women and non-binary people
            who are interested in the world of entrepreneurship and innovation starting in March
            2022.
            <br />
            <br />
            We’ll be teaching the necessary entrepreneurial skills to open up the door to two paths:
            entrepreneurship and employment in the startup ecosystem.
            <br />
            <br />
            Our participants will get the tools to start their own business but we are aware that
            entrepreneurship might not be for everyone. The skills we are teaching will also give
            our attendees a higher chance of getting employed in the innovation and tech industry.
          </Typography>
          <br />
          <br />
          <Button
            href='https://theshortcut1.typeform.com/to/HaY1NdEJ'
            target='_blank'
            rel='noopener noreferrer'
            variant='contained'
            className={classes.applyBtn}>
            APPLY NOW
          </Button>
        </div>
        <img
          src={secondSection}
          width='350px'
          height='auto'
          className={classes.image}
          alt='its-time-to-ignite-your-fire'
        />
      </div>
    </section>
  );
};
export default OneAcademyManyOptions;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#497C7A',
    padding: theme.spacing(11, 5),
  },
  container: {
    maxWidth: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  title: {
    fontFamily: 'Noto Serif Display',
    color: '#FFFCFA',
    paddingRight: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '1px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      fontSize: '1.5rem',
    },
  },
  text: {
    color: '#fffcfa',
    fontFamily: 'Raleway',
    paddingRight: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '1px',
    },
  },
  applyBtn: {
    color: '#497C7A',
    backgroundColor: '#FDEFE4',
    width: '40%',
    [theme.breakpoints.up('xs')]: {
      width: '60%',
    },
    fontWeight: 'bolder',
    fontSize: '1.2rem',
    padding: 10,
    marginRight: '60px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '1px',
    },
  },
}));
