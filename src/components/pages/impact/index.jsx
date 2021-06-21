import React, { useRef } from 'react';

// Hero Image
import heroImage from '../../../assets/photos/impactHero2.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// Children
import ImpactStatistics from './ImpactStatistics';
import MissionVision from './MissionVision';
import ImpactGoals from './ImpactGoals';

const OurImpact = () => {
  const classes = useStyles();

  const drivenRef = useRef(null);
  const missionRef = useRef(null);
  const goalsRef = useRef(null);
  const scrollToDriven = (ref) => window.scrollTo(0, ref.current.offsetTop - 130);
  const scrollToMission = (ref) => window.scrollTo(0, ref.current.offsetTop - 50);
  const scrollToGoals = (ref) => window.scrollTo(0, ref.current.offsetTop - 130);
  const executeScrollDriven = () => scrollToDriven(drivenRef);
  const executeScrollMission = () => scrollToMission(missionRef);
  const executeScrollGoals = () => scrollToGoals(goalsRef);

  return (
    <div>
      {window.innerWidth < 960 ? (
        <img
          src={heroImage}
          width='100%'
          height='auto'
          alt='about-page'
          style={{ filter: 'brightness(40%)' }}
        />
      ) : (
        <div className={classes.hero} />
      )}
      <Typography variant='h1' className={classes.title}>
        Our Impact
      </Typography>
      <div className={classes.buttons}>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollDriven}>
          DRIVEN STATS
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollMission}>
          OUR MISSION
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollGoals}>
          IMPACT GOALS
        </Button>
      </div>
      <ImpactStatistics drivenRef={drivenRef} />
      <MissionVision missionRef={missionRef} />
      <ImpactGoals goalsRef={goalsRef} />
    </div>
  );
};

export default OurImpact;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
  title: {
    minWidth: '100%',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '-3.3em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2.4em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-1.5em',
    },
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minWidth: '60%',
    maxWidth: '60%',
    margin: '-9em auto 0',
    [theme.breakpoints.down('md')]: {
      minWidth: '80%',
      maxWidth: '80%',
      marginTop: '-8em',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '60%',
      maxWidth: '60%',
      marginTop: '-6em',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '95%',
      maxWidth: '95%',
      marginTop: 0,
    },
  },
  button: {
    display: 'inline',
    minWidth: '9em',
    maxWidth: '9em',
    color: '#FFFFFF',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('sm')]: {
      minWidth: '9em',
      maxWidth: '9em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '8em',
      maxWidth: '8em',
    },
  },
}));
