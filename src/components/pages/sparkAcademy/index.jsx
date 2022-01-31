import React from 'react';

// Hero Image
import saHero from '../../../assets/photos/sparkAcademy/sparkAcademy.png';
import saHeroM from '../../../assets/photos/sparkAcademy/sparkAcademyM.png';
import googleLogo from '../../../assets/logo/sparkAcademyPartners/google.png';
import cityOfHelsinkiLogo from '../../../assets/logo/sparkAcademyPartners/cityOfHelsinki.png';

// Children
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ModulesSection from './ModulesSection';
import HowToApplySection from './HowToApplySection';
import InfoSection from './InfoSection';
import Partners from './Partners';
import LastSection from './LastSection';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// META TAG
import MetaTag from '../../utils/MetaTag';

// GTM
import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'spark-academy',
    path: '/spark-academy',
  },
});
const SparkAcademy = () => {
  const classes = useStyles();
  return (
    <div>
      <MetaTag
        title='spark-academy | The Shortcut'
        description='
        The Shortcut is the place for meaningful professional integration and career transformation in Finland. We are an impact-driven non-profit organization that bridges the gap between job seekers and companies in Finland by providing in-demand training and fostering a growth mindset in the community where educated individuals can upskill and build a meaningful career.'
        screenshot=''
      />
      {window.innerWidth < 960 ? (
        <img src={saHeroM} width='100%' height='400px' alt='sparkAcademy-page' />
      ) : (
        <div className={classes.hero} />
      )}
      <div className={classes.title}>
        <Typography variant='h1' style={{ fontFamily: 'Noto Serif Display' }}>
          Spark Academy
        </Typography>
        <Typography variant='h3' style={{ fontFamily: 'Noto Serif Display' }}>
          Every Fire starts with a Spark
        </Typography>
        <div className={classes.logos}>
          <img src={googleLogo} alt='partner-logo-Google' width='100px' height='auto' />
          <img
            src={cityOfHelsinkiLogo}
            alt='partner-logo-cityOfHelsinki'
            width='100px'
            height='auto'
          />
        </div>
      </div>
      <FirstSection />
      <SecondSection />
      {/* <ModulesSection /> */}
      <HowToApplySection />
      <InfoSection />
      <Partners />
      <LastSection />
    </div>
  );
};

export default SparkAcademy;

const useStyles = makeStyles((theme) => ({
  hero: {
    position: 'relative',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),url(${saHero}) center/cover fixed no-repeat`,
    zIndex: -1,
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    color: '#FFFFFF',
    top: '22.5em',
    left: '10.5em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      top: '16%',
      left: '2em',
      maxWidth: '',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
  applyBtn: {
    minWidth: '15em',
    maxWidth: '15em',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      marginTop: 12,
    },
    color: '#fff',
    backgroundColor: '#497C7A',
  },
  text: {
    paddingLeft: '60px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1px',
    },
  },
  logos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    display: 'inline',
    width: '9em',
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
  wrapper: {
    background: '#DDDDDD',
    border: '1px solid #DDDDDD',
    margin: '7em auto',
    [theme.breakpoints.down('sm')]: {
      margin: '2em auto',
    },
  },
  lastSection: {
    minWidth: '100%',
    backgroundColor: '#141414',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7em 0',
    marginBottom: '-4em',
  },
}));
