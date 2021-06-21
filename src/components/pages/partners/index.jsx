import React, { useRef} from 'react';

// Hero Image
import heroImage from '../../../assets/photos/partnersHero2.jpeg';

// Material-IU
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// Children
import PartnersStatistics from './PartnersStatistics';
import Subject from './Subject';
import Initiatives from './Initiatives';
import OurPatrnersLogos from '../../custom/OurPartnersLogos';
import GetPartnerForm from './GetPartnerForm';

const Partners = () => {
  const classes = useStyles();

  const workRef = useRef(null);
  const initRef = useRef(null);
  const intRef = useRef(null);
  const scrollToRefWork = (ref) => window.scrollTo(0, ref.current.offsetTop - 130);
  const scrollToRefInit = (ref) => window.scrollTo(0, ref.current.offsetTop - 130);
  const scrollToRefInt = (ref) => window.scrollTo(0, ref.current.offsetTop - 130);
  const executeScrollWork = () => scrollToRefWork(workRef);
  const executeScrollInit = () => scrollToRefInit(initRef);
  const executeScrollInt = () => scrollToRefInt(intRef);

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
        For Partners
      </Typography>
      <div className={classes.buttons}>
        <Button variant='contained' color='primary' className={classes.button} onClick={executeScrollWork}>
          HOW WE WORK
        </Button>
        <Button variant='contained' color='primary' className={classes.button} onClick={executeScrollInit}>
          INITIATIVES
        </Button>
        <Button variant='contained' color='primary' className={classes.button} onClick={executeScrollInt}>
          INTRESTED?
        </Button>
      </div>
      <PartnersStatistics />
      {/* <ActivePartners /> */}
      <div style={{ backgroundColor: '#DDDDDD', border: '1px solid #DDDDDD' }}>
        <Subject workRef={workRef} />
      </div>
      <Initiatives initRef={initRef} />
      <div style={{ backgroundColor: '#DDDDDD', border: '1px solid #DDDDDD' }}>
        <OurPatrnersLogos />
      </div>
      <GetPartnerForm intRef={intRef} />
    </div>
  );
};

export default Partners;

const useStyles = makeStyles((theme) => ({
  root: {},
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
      marginTop:'-1.5em'
    }
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
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '98%',
      maxWidth: '98%',
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
      minWidth: '11em',
      maxWidth: '10em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '9.5em',
      maxWidth: '9.5em',
    },
  },
}));
