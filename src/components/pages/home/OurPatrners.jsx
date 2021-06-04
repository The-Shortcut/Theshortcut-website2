import React from 'react';

//Matrial-UI
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// Children
import Title from '../../custom/Title';

const partnersData = [
  {
    name: 'mege',
    logo: 'https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_EU-logos-600x424.png',
    url: 'https://www.mege.fi/',
  },
  {
    name: 'helsinki city',
    logo: 'https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Helsinki-logo-600x424.png',
    url: 'https://www.hel.fi/helsinki/en',
  },
  {
    name: 'new co helsinki',
    logo: 'https://theshortcut.org/wp-content/uploads/2020/11/newco.png',
    url: 'https://newcohelsinki.fi/en/',
  },
  {
    name: 'mario 01',
    logo: 'https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Maria-01-logo-1.png',
    url: 'https://maria.io/directories/ecosystem-builders/',
  },
  {
    name: 'slush',
    logo: 'https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Slush-logo-1.png',
    url: 'https://www.slush.org/',
  },
  {
    name: 'junction',
    logo: 'https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Junction-logo.png',
    url: 'https://www.hackjunction.com/',
  },
  {
    name: 'wave ventures',
    logo: 'https://theshortcut.org/wp-content/uploads/2019/08/About-Us-section-logos_Wave-Ventures-logo-2.png',
    url: 'https://wave.ventures/',
  },
];

const OurPatrners = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title>Our Partners</Title>
      <div className={classes.items}>
        {partnersData.map((part, index) => (
          <Button
            href={part.url}
            key={index}
            className={classes.logoButton}
            target='_blank'
            rel='noopener noreferrer'>
            <img src={part.logo} className={classes.logo} alt={part.name} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default OurPatrners;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '70%',
    margin: '7em auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
  },
  items: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    [theme.breakpoints.only('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoButton: {
    background: '#ddd',
    maxHeight: '120px',
    margin: '1em',
    transition: 'transform 1s',
    '&:hover': {
      border: '1px solid #00a99d',
      transform: 'scale(1.1)',
    },
  },
  logo: {
    minWidth: '80%',
    maxWidth: '70%',
  },
}));
