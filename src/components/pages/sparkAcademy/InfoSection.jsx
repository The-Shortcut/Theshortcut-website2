import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const infoData = [
  {
    title: 'A Like-Minded Community',
    description:
      'The Academy is meant to be an open space to build a community of like-minded people to find meaningful connections and get inspired by each other. You will get to grow together with aspiring entrepreneurs and share your struggles and successes along the way. ',
  },
  {
    title: 'Connect with Founders & Investors ',
    description:
      'We need to create a more inclusive environment for female and non-binary entrepreneurs in Finland. Our Academy offers the necessary skills but also mentoring and crucial networking opportunities for aspiring entrepreneurs to connect with investors and create a repeatable, successful structure to have more female and non-binary founders in the ecosystem. ',
  },
  {
    title: 'The Schedule',
    description:
      'The Academy will run twice over the span of two years, starting in 2022. Each academic season is eight months. Participants can choose to do the full eight months or pick modules that are relevant to them:',
    options: [
      'Orientation Weeks: March',
      'Entrepreneurship: April',
      ' Digital Marketing: May',
      'Growth Hacking: June',
      'Full-Stack Development: August- December 22',
    ],
  },
  {
    title: 'Supported by the Ecosystem',
    description:
      ' Our Academy is deeply embedded in the startup ecosystem in Helsinki. Our partners include the City of Helsinki, Google, NewCo Helsinki, the City of Espoo and many more (see below). With this support we ensure that our Academy attendees are set up for success.',
  },
];

const InfoSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Typography variant='h3' className={classes.title}>
        Join Us!
      </Typography>
      <br />
      <Grid container spacing={6} className={classes.container}>
        {infoData.map((item, index) => (
          <Grid item xs={12} sm={5} className={classes.item} key={index}>
            <Typography
              variant='h4'
              style={{ fontFamily: 'Noto Serif Display', fontSize: '1.2rem' }}>
              {item.title}
            </Typography>
            <br />
            <Typography variant='subtitle1' style={{ fontWeight: 'normal', fontFamily: 'Raleway' }}>
              {item.description}
            </Typography>
            <ul>
              {item.options?.map((option) => (
                <li style={{ fontSize: '1rem', fontFamily: 'Raleway' }}>{option}</li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
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
    </section>
  );
};

export default InfoSection;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#497C7A',
    padding: theme.spacing(11, 5),
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Noto Serif Display',
    color: '#FFFCFA',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      fontSize: '1.5rem',
    },
  },
  container: {
    margin: 'auto',
    maxWidth: '80%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  item: {
    color: '#000',
    backgroundColor: '#fff',
    /* minHeight: '7em', */
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'strech',
    justifyContent: 'flex-start',
    margin: theme.spacing(1),
    minWidth: '48%',
    [theme.breakpoints.down('md')]: {
      minWidth: '100%',
    },
  },
  applyBtn: {
    color: '#497C7A',
    backgroundColor: '#FDEFE4',
    minWidth: '22em',
    maxWidth: '22em',
    [theme.breakpoints.down('xs')]: {
      minWidth: '13em',
      maxWidth: '13em',
    },
    fontWeight: 'bolder',
    fontSize: '1.2rem',
    padding: 10,
  },
}));
