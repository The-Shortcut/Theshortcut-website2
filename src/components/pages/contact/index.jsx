import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

// Hero Image
import heroImage from '../../../assets/photos/contactHero.jpg';

// Children
/* import Team from './Team';
import Board from './Board'; */
import GetInTouch from './GetInTouch';
import FAQ from '../about/FAQ';

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div>
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
      <div id='getInTouch' />
      <GetInTouch />
      <FAQ />
      {/* <Team />
      <Board /> */}
    </div>
  );
};

export default ContactUs;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '80vh',
    maxHeight: '80vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
}));
