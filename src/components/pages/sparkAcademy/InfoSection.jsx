import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const infoData = [
  {
    title: 'A Like-minded Community',
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
      'Our Academy is deeply embedded in the startup ecosystem in Helsinki. Our project partners include the City of Helsinki, Google, NewCo Helsinki, the City of Espoo and many more (see below). With this support we ensure that our Academy attendees are set up for success. ',
  },
];

const InfoSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Grid container spacing={6} className={classes.container}>
        {infoData.map((item, index) => (
          <Grid item xs={12} sm={5} className={classes.item} key={index}>
            <Typography variant='h4' style={{ fontFamily: 'Noto Serif Display' }}>
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
    </section>
  );
};

export default InfoSection;

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: '#497C7A',
    padding: theme.spacing(11, 5),
  },
  container: {
    margin: 'auto',
      maxWidth: '80%',
      [theme.breakpoints.down('xs')]: {
        minWidth: '100%'
    }
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
  },
}));
