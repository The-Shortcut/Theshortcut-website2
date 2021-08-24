import React from 'react';

// Data
import { teamData } from './meetUsData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Button,
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const TeamAvailabilities = () => {
  const classes = useStyles();

  console.log(teamData);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {teamData.map((item, index) => (
          <Card key={index} className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt={item.title}
                className={classes.media}
                image={item.photo}
                title={item.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='subtitle2'>{item.title}</Typography>
                <Typography variant='subtitle1' component='p' className={classes.text}>
                  {item.expertiseAreas}
                </Typography>
                <div className={classes.icons}>
                  <div
                    style={{
                      width: '110px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <AccessTimeIcon style={{ marginRight: '5px' }} /> {item.availabilityTime}
                  </div>
                  <div
                    style={{
                      width: '110px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                    }}>
                    <EventAvailableIcon style={{ marginRight: '5px' }} /> {item.availabilityDay}
                  </div>
                </div>
                <Button
                  variant='outlined'
                  color='primary'
                  className={classes.btn}
                  href={item.link}
                  target='_blank'>
                  Book a Meeting
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamAvailabilities;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '85%',
    maxWidth: '85%',
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
    margin: '5em auto',
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(243px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    /*  border: '2px solid red', */
    margin: 'auto',
  },
  card: {
    margin: 'auto',
    borderRadius: '10px',
    /* maxWidth: 280, */
    minHeight: 550,
    maxHeight: 550,
    [theme.breakpoints.down('md')]: {
      minHeight: 560,
      maxHeight: 560,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      minHeight: 540,
      maxHeight: 540,
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 520,
      maxHeight: 520,
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '150%',
    maxWidth: '9em',
    minWidth: '9em',
    maxHeight: '9em',
    minHeight: '9em',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
    backgroundColor: '#fff',
  },
  media: {
    height: 220,
    /*     [theme.breakpoints.only('sm')]: {
      height: 140,
    }, */
  },
  title: {
    minWidth: '90%',
    minHeight: '50px',
    maxHeight: '50px',
    [theme.breakpoints.down('md')]: {
      minHeight: '65px',
      maxHeight: '65px',
    },
    margin: 'auto',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    lineHeight: '1.5em',
    marginTop: 10,
    minHeight: '160px',
    maxHeight: '160px',
    [theme.breakpoints.down('xs')]: {
      minHeight: '120px',
      maxHeight: '120px',
    },
  },
  icons: {
    minWidth: '95%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '60%',
      maxWidth: '60%',
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    marginTop: 10,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '150%',
    maxWidth: '7em',
    minWidth: '7em',
    maxHeight: '7em',
    minHeight: '7em',
    margin: '1em 0 0 0',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
    backgroundColor: '#fff',
  },
}));
