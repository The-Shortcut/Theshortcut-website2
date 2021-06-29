import React, { useRef } from 'react';

// META TAG
import MetaTag from '../../utils/MetaTag';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// Hero Image
import heroImage from '../../../assets/photos/contactHero2.png';

// Children
import GetInTouch from './GetInTouch';
import FAQ from './FAQ';
import ContactForm from './ContactForm';

// GTM
import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'contact-us',
    path: '/contact-us',
  },
});

const ContactUs = () => {
  const classes = useStyles();

  const findRef = useRef(null);
  const faqRef = useRef(null);
  const msgRef = useRef(null);
  const scrollToFind = (ref) => window.scrollTo(0, ref.current.offsetTop - 130);
  const scrollToFaq = (ref) => window.scrollTo(0, ref.current.offsetTop - 130);
  const scrollToMsg = (ref) => window.scrollTo(0, ref.current.offsetTop - 130);
  const executeScrollFind = () => scrollToFind(findRef);
  const executeScrollFaq = () => scrollToFaq(faqRef);
  const executeScrollMsg = () => scrollToMsg(msgRef);

  return (
    <div id='getInTouch'>
      <MetaTag
        title='Contact Us | The Shortcut'
        description='Interested in The Shortcut’s training and events? Get in touch! We are here to help.'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/contact-us.png'
      />
      {window.innerWidth < 960 ? (
        <img
          src={heroImage}
          width='100%'
          height='auto'
          alt='contact-page'
          style={{ filter: 'brightness(40%)' }}
        />
      ) : (
        <div className={classes.hero} />
      )}
      <Typography variant='h1' className={classes.title}>
        Contact Us
      </Typography>
      <div className={classes.buttons}>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollFind}>
          FIND US
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollFaq}>
          FAQ
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={executeScrollMsg}>
          MESSAGE US
        </Button>
      </div>
      <GetInTouch findRef={findRef} />
      <div style={{ background: '#DDDDDD', border: '1px solid #DDDDDD' }}>
        <FAQ faqRef={faqRef} />
      </div>
      <ContactForm msgRef={msgRef} />
    </div>
  );
};

export default ContactUs;

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
      marginTop: '-4em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-2.5em',
    },
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minWidth: '60%',
    maxWidth: '60%',
    margin: '-9em auto 0',
    [theme.breakpoints.only('md')]: {
      minWidth: '80%',
      maxWidth: '80%',
      marginTop: '-9.5em',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '60%',
      maxWidth: '60%',
      marginTop: '-8em',
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
      minWidth: '8em',
      maxWidth: '8em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '8em',
      maxWidth: '8em',
    },
  },
}));
