import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
} from '@material-ui/core';

const Section = ({ section }) => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <CardContent>
        <div className={classes.iconContainer}>{section.icon}</div>
        <Typography variant='h4' className={classes.title}>
          {section.title}
        </Typography>
        <Typography variant='body1' className={classes.text}>
          {section.text}
        </Typography>
        <Typography variant='body1' style={{ textAlign: 'center' }}>
          {section.target}
        </Typography>
        <CardActions>
          {section.links ? (
            <div className={classes.links}>
              {section.links.map((link, index) => (
                <Link
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  component='a'
                  key={index}>
                  {link.icon}
                </Link>
              ))}
            </div>
          ) : (
            <Button
              variant='contained'
              color='primary'
              href={section.redirect.path}
              className={classes.button}>
              {section.redirect.name}
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Box>
  );
};

export default Section;

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 480,
    maxHeight: 480,
    background: '#F9F9F9',
    border: '1px solid #888888',
    borderRadius: '10px',
    margin: '2em auto',
    [theme.breakpoints.down('md')]: {
      minHeight: 520,
    },
    [theme.breakpoints.down('sm')]: {
      margin: '3em auto',
      minHeight: 460,
      maxHeight: 460,
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 430,
      maxHeight: 430,
      margin: 'auto',
    },
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '150%',
    boxShadow: ' 0px 0px 22px -5px #434343',
    maxWidth: '9em',
    minWidth: '9em',
    maxHeight: '9em',
    minHeight: '9em',
    marginTop: -90,
    [theme.breakpoints.only('md')]: {
      maxWidth: '7em',
      minWidth: '7em',
      maxHeight: '7em',
      minHeight: '7em',
      marginTop: -70,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '7em',
      minWidth: '7em',
      maxHeight: '7em',
      minHeight: '7em',
      marginTop: -70,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '5em',
      minWidth: '5em',
      maxHeight: '5em',
      minHeight: '5em',
      margin: 0,
      float: 'left',
    },
    backgroundColor: '#fff',
  },
  title: {
    margin: 'auto',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
    },
  },
  text: {
    margin: '1em 1em',
    lineHeight: '28px',
    textAlign: 'center',
    minWidth: '90%',
    minHeight: '12em',
    maxHeight: '12em',
    [theme.breakpoints.only('md')]: {
      marginTop: '2em',
      minHeight: '15em',
      maxHeight: '15em',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '12em',
      maxHeight: '12em',
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '9em',
      maxHeight: '9em',
    },
  },
  button: {
    display: 'inline',
    width: '10em',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    margin: '1em auto 0',
    [theme.breakpoints.down('md')]: {
      width: '12em',
      fontSize: '0.8rem',
    },
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '60%',
    margin: '1em auto 0',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
    },
  },
}));
