import React from 'react';

// Hero Image
import heroImage from '../../../assets/photos/impactHero.jpg';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

// Children
import ImpactStatistics from './ImpactStatistics';
import MissionVision from './MissionVision';
import ImpactGoals from './ImpactGoals';

const OurImpact = () => {
  const classes = useStyles();

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
      <ImpactStatistics />
      <MissionVision />
      <ImpactGoals />
    </div>
  );
};

export default OurImpact;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '65vh',
    maxHeight: '65vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
}));
