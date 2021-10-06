import React from 'react';
import { Redirect } from 'react-router-dom';

// META TAG
import MetaTag from '../../utils/MetaTag';

// Images
import heroImage from '../../../assets/photos/talentCommunityHero.jpg';
import talent1 from '../../../assets/photos/talent1.png';
import talent2 from '../../../assets/photos/talent2.png';
import talent3 from '../../../assets/photos/talent3.png';
import talent4 from '../../../assets/photos/talent4.png';
import talent5 from '../../../assets/photos/talent5.png';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// children
import Title from '../../custom/Title';

// GTM
import TagManager from 'react-gtm-module';
TagManager.dataLayer({
  dataLayer: {
    event: 'pageView',
    url: `${window.location.pathname}${window.location.search}`,
    page: 'talent community',
    path: '/talent-community',
  },
});

const TalentCommunity = () => {
  const classes = useStyles();

  if (window.location.pathname !== '/talent-community') {
    return <Redirect to='/404' />;
  }
  return (
    <div>
      <MetaTag
        title='Talent Community | The Shortcut'
        description='The Shortcut is a diverse community of learners in Finland. Whether you want to network or transform your career, join us today.'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/community.png'
      />
      {window.innerWidth < 960 ? (
        <>
          <img src={heroImage} width='100%' height='450px' alt='community-page' />
          <Typography variant='h1' style={{ fontSize: '2.5rem' }} className={classes.title}>
            Join Our <br /> Talent Community
          </Typography>
        </>
      ) : (
        <>
          <div className={classes.hero} />
          <Typography variant='h1' className={classes.title}>
            Join Our <br /> Talent Community
          </Typography>
        </>
      )}

      <section className={classes.section}>
        <Title>Join Our Community</Title>
        <div className={classes.container}>
          <img src={talent1} alt='join-our-community' className={classes.image} />
          <div className={classes.content}>
            <Typography variant='body1' className={classes.text}>
              The Shortcut Talent Community is our talent pool, powered by TalentAdore. In our
              Talent Community you can include information about your current job status, your CV,
              and interests.
            </Typography>
            <Typography variant='body1' className={classes.text}>
              Based on this info, we will offer you personalized suggestions about open positions in
              our partner companies or recommend events & training relevant to you.
            </Typography>
            <Typography variant='body1' className={classes.text}>
              Joining the Talent Community is the best way to get the most out of our services!
            </Typography>
            <Button
              href='https://ats.talentadore.com/candidates/shortcut/add/eQz/en/g/K66V'
              target='_blank'
              rel='noopener noreferrer'
              color='primary'
              variant='contained'
              className={classes.joinBtn}>
              Join the Talent Community
            </Button>
          </div>
        </div>
      </section>
      <section className={classes.section}>
        <Title>Who is it for?</Title>
        <div className={classes.container}>
          <div className={classes.content}>
            <Typography variant='body1' style={{ padding: '1.2em' }}>
              Anyone who is looking to make a change in their careers. <br />
              Whether you are:
              <ul style={{ margin: 0 }}>
                <li>currently unemployed</li>
                <li> working in a position that isn’t your dream job</li>
                <li>just considering changing the direction of your career</li>
              </ul>
              <br />
              There is no age limit or language requirement.
              <br /> The only restriction is that you should already be in Finland or on your way
              here with a valid residence permit/in the process of getting one. We do not offer
              relocation services. If you are looking for information on moving to Finland, please
              check out{' '}
              <a href=' https://www.infofinland.fi/' target='_blank' style={{ color: '#001' }}>
                Info Finland
              </a>{' '}
              instead.
            </Typography>
          </div>
          <img src={talent2} alt='join-our-community' className={classes.image} />
        </div>
      </section>
      <section className={classes.section}>
        <Title>How do I join?</Title>
        <div className={classes.container}>
          <img src={talent3} alt='join-our-community' className={classes.image} />
          <div className={classes.content}>
            <Typography variant='body1' className={classes.text}>
              First, you have to register your email address. We will send you a sign-up link into
              your inbox to access the community. This link is valid for 10 days, during which you
              will need to complete your profile with your background information.
            </Typography>
            <Typography variant='body1' className={classes.text}>
              Filling in your profile will take approximately 10-15 minutes, and you should have
              your CV at hand.
            </Typography>
            <Typography variant='body1' className={classes.text}>
              If you want to update your profile later on or change your employment status, you can
              submit your email on the same page where you joined to get a new sign-in link.
            </Typography>
            <Button
              href='https://ats.talentadore.com/candidates/shortcut/add/eQz/en/g/K66V'
              target='_blank'
              rel='noopener noreferrer'
              color='primary'
              variant='contained'
              className={classes.joinBtn}>
              Join the Talent Community
            </Button>
          </div>
        </div>
      </section>
      <section className={classes.section}>
        <Title>How does the Talent Community work?</Title>
        <div className={classes.container}>
          <div className={classes.content}>
            <Typography variant='body1' className={classes.text}>
              When you join the community, you give us permission to store and handle your personal
              and professional background information.
            </Typography>
            <Typography variant='body1' className={classes.text}>
              We will use your data to make sure that the suggestions we send you about training
              programs or open positions in our partner companies will be relevant to your
              background and interests.
            </Typography>
            <Typography variant='body1' className={classes.text}>
              When our partner companies ask us to help them find suitable candidates for their job
              openings, we will use the pool to find candidates who fit their criteria.
            </Typography>
          </div>
          <img src={talent4} alt='join-our-community' className={classes.image} />
        </div>
      </section>
      <section className={classes.section}>
        <Title>How long will you store my data?</Title>
        <div className={classes.container}>
          <img src={talent5} alt='join-our-community' className={classes.image} />
          <div className={classes.content}>
            <Typography variant='body1' className={classes.text}>
              Your data will be stored for 24 months unless you submit a request for removal. After
              24 months, you will receive an email notification asking whether you wish to remain in
              The Shortcut Talent Community.
            </Typography>
            <Typography variant='body1' className={classes.text}>
              Your data will be deleted if you do not update your profile within a specified time
              period after receiving that message.
            </Typography>
            <Button
              href='https://ats.talentadore.com/candidates/shortcut/add/eQz/en/g/K66V'
              target='_blank'
              rel='noopener noreferrer'
              color='primary'
              variant='contained'
              className={classes.joinBtn}>
              Join the Talent Community
            </Button>
          </div>
        </div>
      </section>
      <section className={classes.lastSection}>
        <Typography variant='h3' style={{ textAlign: 'center' }}>
          Already have a profile <br /> in our Talent Community?
        </Typography>
        <Button
          href='https://ats.talentadore.com/candidates/shortcut/add/eQz/en/g/K66V'
          target='_blank'
          rel='noopener noreferrer'
          color='secondary'
          variant='contained'
          className={classes.editInfoBtn}>
          Edit your information here
        </Button>
      </section>
    </div>
  );
};

export default TalentCommunity;

const useStyles = makeStyles((theme) => ({
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${heroImage}) center/cover fixed no-repeat`,
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
      marginTop: '-3.5em',
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
    minWidth: '12em',
    maxWidth: '12em',
    color: '#FFFFFF',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'none',
    margin: '1em 0',
    [theme.breakpoints.down('sm')]: {
      minWidth: '11em',
      maxWidth: '11em',
      fontSize: '0.8rem',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '8em',
      maxWidth: '8em',
    },
  },
  section: {
    margin: '5em auto 7em',
    border: '1px solid #f9f9f9',
    [theme.breakpoints.down('sm')]: {
      margin: '3.5em auto',
    },
  },
  lastSection: {
    backgroundColor: '#141414',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7em 0',
    marginBottom: '-4em',
  },
  text: {
    textAlign: 'center',
    lineHeight: '28px',
    padding: '0 1.2em',
  },
  container: {
    maxWidth: '80%',
    margin: 'auto',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      maxWidth: '90%',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '60%',
    }
  },
  image: {
    flex: 1,
    maxWidth: '50%',
    minHeight: '370px',
    maxHeight: '450px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
      minHeight: '470px',
      maxHeight: '480px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      maxHeight: '320px',
      order: 1,
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '260px',
    },
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      padding: '1em 0',
      order: 2,
    },
  },
  joinBtn: {
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
  },
  editInfoBtn: {
    color: '#fff',
    backgroundColor: '#a90061',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginTop: 30,
  },
}));
