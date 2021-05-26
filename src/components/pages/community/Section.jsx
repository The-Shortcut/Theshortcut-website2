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
      <CardActionArea style={{minHeight:'100%'}}>
        <CardContent>
          <img src={section.image} alt={section.title} className={classes.imageContainer} />
          <Typography variant='h6' className={classes.title}>
            {section.title}
          </Typography>
          <Typography variant='body1' className={classes.text}>
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
    minWidth: 335,
    maxWidth: 335,
    minHeight: 410,
    maxHeight: 410,
    background:'#F9F9F9',
    border: '1px solid #888888',
    borderRadius: '10px',
    margin: '2em auto',
    [theme.breakpoints.up('md')]: {
      minWidth: 360,
      maxWidth: 360,
      margin: '1em auto',
    },
    [theme.breakpoints.only('md')]: {
      minWidth: 290,
      maxWidth: 290,
      margin: '1em auto',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 480,
      maxHeight: 480,
    },
  },
  imageContainer: {
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
      margin: 0
    },
    backgroundColor: '#fff',
  },
  title: {
    float: 'right',
  },
  text: {
    margin: ' 3em auto',
    textAlign: 'justify',
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
  },
}));
