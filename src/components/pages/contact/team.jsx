import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

// ICONS
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { teamMembers } from '../../../actions/teamActions';

// Children
import Title from '../../custom/Title';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
};
const Team = () => {
  const classes = useStyles();
  const [state, setState] = useState(-1);
  const { teammates } = useSelector((state) => state.team);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(teamMembers());
  }, [dispatch]);

  return (
    <div className={classes.section}>
      <div className={classes.root}>
        <Title>Our Team</Title>
        {window.innerWidth < 600 ? (
          <Slider {...settings} style={{ margin: 'auto' }}>
            {teammates &&
              teammates.map(({ acf }, index) => (
                <Card className={classes.card} key={index}>
                  <img className={classes.media} src={acf.image} alt={acf.name} />
                  <CardContent>
                    <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
                      {acf.name}
                    </Typography>
                    <Typography variant='subtitle2'>{acf.position}</Typography>
                  </CardContent>
                  <div className={classes.icons}>
                    <a href={`mailto:${acf.email}`} target="_blank" rel="noopener noreferrer">
                      <EmailIcon color='primary' />
                    </a>
                    <a href={acf.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon color='primary' />
                    </a>
                    <a href={acf.twitter} target="_blank" rel="noopener noreferrer">
                      <TwitterIcon color='primary' />
                    </a>
                  </div>
                </Card>
              ))}
          </Slider>
        ) : (
          <div className={classes.container}>
            {teammates &&
              teammates.map((item, index) => (
                <div key={index}>
                  <Card
                    className={classes.card}
                    onMouseEnter={() => setState(index)}
                    onMouseLeave={() => setState(-1)}>
                    {state === index && (
                      <CardContent open={state} className={classes.icons}>
                        <a href={`mailto:${item.acf.email}`}>
                          <EmailIcon
                            color='primary'
                            fontSize='large'
                            style={{ filter: 'brightness(150%)' }}
                          />
                        </a>
                        <a href={item.acf.linkedin}>
                          <LinkedInIcon
                            color='primary'
                            fontSize='large'
                            style={{ filter: 'brightness(150%)' }}
                          />
                        </a>
                        <a href={item.acf.twitter}>
                          <TwitterIcon
                            color='primary'
                            fontSize='large'
                            style={{ filter: 'brightness(150%)' }}
                          />
                        </a>
                      </CardContent>
                    )}
                    <CardMedia component="img" className={classes.media} image={item.acf.image} alt={item.acf.name} />
                    <CardContent>
                      <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
                        {item.acf.name}
                      </Typography>
                      <Typography variant='subtitle2'>{item.acf.position}</Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
          </div>
        )}
      </div>
      <div id='ourBoard' />
    </div>
  );
};

export default Team;

const useStyles = makeStyles((theme) => ({
  section: {
   /*  background: '#DDDDDD', */
    paddingTop: '5px',
    paddingBottom: '5px'
  },
  root: {
    minWidth: '70%',
    maxWidth: '70%',
    margin: '5em auto',
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
  },
  container: {
    minWidth: '100%',
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fill, 180px)',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  card: {
    position: 'relative',
    maxWidth: '13em',
    minWidth: '13em',
    minHeight: '24em',
    maxHeight: '24em',
    margin: '0 auto 1em',
    borderRadius: '15px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '12em',
      minWidth: '12em',
      minHeight: '25em',
      maxHeight: '25em',
      borderRadius: 0,
      margin: 0,
      outline: 'none',
    },
  },
  icons: {
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    zIndex: 100,
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    background: '#434343',
    filter: 'brightness(100%)',
    opacity: 0.8,
    [theme.breakpoints.down('xs')]: {
      minHeight: '15%',
      maxHeight: '15%',
      bottom: 0,
      animation: 'none',
      background: '#eee',
    },
  },
  '@keyframes myEffect': {
    '0%': {
      filter: 'brightness(0)',
      transform: 'translateY(-100%)',
    },
    '100%': {
      filter: 'brightness(100%)',
      transform: 'translateY(0)',
    },
  },
  media: {
    width: '100%',
    height: 240,
    borderRadius: '15px 15px 0 0',
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
    },
  },
}));
