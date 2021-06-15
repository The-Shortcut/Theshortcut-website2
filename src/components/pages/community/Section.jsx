import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
  Button,
  Link,
} from '@material-ui/core';

const Section = ({ section }) => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <CardActionArea style={{ minHeight: '100%' }}>
        <CardContent>
          <div className={classes.iconContainer}>{section.icon}</div>
          <Typography variant='h4' className={classes.title}>
            {section.title}
          </Typography>
          <Typography variant='subtitle1' component='p' className={classes.text}>
            {section.text}
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
      </CardActionArea>
    </Box>
  );
};

export default Section;

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 340,
    maxWidth: 340,
    minHeight: 410,
    maxHeight: 410,
    background: '#F9F9F9',
    border: '1px solid #888888',
    borderRadius: '10px',
    margin: '2em auto',
    [theme.breakpoints.only('md')]: {
      minWidth: 310,
      maxWidth: 310,
    },

    [theme.breakpoints.down('sm')]: {
      minWidth: 380,
      maxWidth: 380,
      minHeight: 580,
      maxHeight: 580,
    },
    '@media (min-width: 320px)': {
      maxWidth: 300,
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
    [theme.breakpoints.only('md')]: {
      maxWidth: '7em',
      minWidth: '7em',
      maxHeight: '7em',
      minHeight: '7em',
    },
    marginTop: -90,
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
    backgroundColor: '#fff',
  },
  title: {
    margin: 'auto',
    textAlign: 'center',
  },
  text: {
    minHeight: '11em',
    maxHeight: '11em',
    margin: ' 3em 1em',
    lineHeight: '28px',
    textAlign: 'left',
  },
  button: {
    display: 'inline',
    width: '9em',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      width: '12em',
      fontSize: '0.8rem',
    },
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '60%',
    margin:'auto'
  },
}));
