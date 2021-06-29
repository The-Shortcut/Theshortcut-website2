import React from 'react';

// META TAG
import MetaTag from '../../../utils/MetaTag';

// Hero Image
import heroImage from '../../../../assets/photos/BYOB21Banner.gif';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// Children
import Title from '../../../custom/Title';
import ByobFAQ from './ByobFAQ';

// GTM
import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'be your own boss',
    path: '/byob',
  },
});

const BYOB = () => {
  const classes = useStyles();
  return (
    <div>
      <MetaTag
        title='Be Your Own Boss | The Shortcut'
        description="Our beloved entrepreneurship training program B.Y.O.B. -Be Your Own Boss is back! This
          year it will be a 6 weeks long training program. (13th September - 22nd October 2021) The
          program's goal is to give you the fundamental tools in order to create a viable company."
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/b.y.o.b.png'
      />
      {window.innerWidth < 960 ? (
        <img src={heroImage} width='100%' height='auto' alt='BYOB-page' />
      ) : (
        <div className={classes.hero} />
      )}
      <section className={classes.intro}>
        <Title>Be Your Own Boss</Title>
        <Typography variant='body1' className={classes.text}>
          Our beloved entrepreneurship training program B.Y.O.B. -Be Your Own Boss is back! This
          year it will be a 6 weeks long training program. (13th September - 22nd October 2021) The
          program's goal is to give you the fundamental tools in order to create a viable company.
          BYOB will be divided into workshops covering a broad range of disciplines, allowing you to
          develop your business ideas, put into practice the teachings, and navigate the Ecosystem.
          So, what are you waiting for?
          <br />
          Join us!
        </Typography>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          target='_blank'
          href='https://koulutukset.te-palvelut.fi/kt/699751?locations=Uusimaa&announced=0&sort=1&fbclid=IwAR1ChC0nk6-HVmgvCTKU5jsAQveqkGjQfq1b1t4yacMxc6oBpvHuHpXJhnY'>
          APPLY NOW
        </Button>
      </section>
      <div className={classes.wrapper}>
        <ByobFAQ />
      </div>
      <section className={classes.intro}>
        <Typography varian='body1'>
          We’d love to hear from you! Please direct any questions regarding the program content to
          Vickie Weng: <a href='mailto:vickie@theshortcut.org'>vickie@theshortcut.org</a>
        </Typography>
        <Typography variant='body1'>
          For questions on how to apply to the program or the benefits during the program, please
          contact TE telephone services (in English):
        </Typography>
        <ul>
          <li style={{ fontSize: '1rem' }}>
            tel. <a href='tel:+358295020713'>0295 020 713</a> (Mon-Fri 9.00 - 16.15)
          </li>
          <li style={{ fontSize: '1rem' }}>
            <a href='www.facebook.com/koulutusneuvonta'>www.facebook.com/koulutusneuvonta</a>
          </li>
        </ul>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          target='_blank'
          href='https://koulutukset.te-palvelut.fi/kt/699751?locations=Uusimaa&announced=0&sort=1&fbclid=IwAR1ChC0nk6-HVmgvCTKU5jsAQveqkGjQfq1b1t4yacMxc6oBpvHuHpXJhnY'>
          APPLY NOW
        </Button>
      </section>
    </div>
  );
};

export default BYOB;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `url(${heroImage}) center/cover fixed no-repeat`,
  },
  intro: {
    minWidth: '70%',
    maxWidth: '70%',
    margin: '4em auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1em auto',
    },
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
}));
