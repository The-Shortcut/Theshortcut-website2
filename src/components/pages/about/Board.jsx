import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

// ICONS
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { boardMembers } from '../../../actions/teamActions';

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

const Board = ({ boardRef }) => {
  const classes = useStyles();
  const [state, setState] = useState(-1);
  const { board } = useSelector((state) => state.team);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardMembers());
  }, [dispatch]);

  return (
    <div ref={boardRef} className={classes.root}>
      <Title>Our Board</Title>
      {window.innerWidth < 600 ? (
        <Slider {...settings} style={{ margin: 'auto' }}>
          {board &&
            board.map(({ acf }, index) => (
              <Card className={classes.card} key={index}>
                <img className={classes.media} src={acf.image} alt={acf.name} />
                <CardContent>
                  <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
                    {acf.name}
                  </Typography>
                  <Typography variant='subtitle2'>{acf.position}</Typography>
                </CardContent>
                <div className={classes.icons}>
                  <a href={`mailto:${acf.email}`}>
                    <EmailIcon color='primary' />
                  </a>
                  <a href={acf.linkedin}>
                    <LinkedInIcon color='primary' />
                  </a>
                  <a href={acf.twitter}>
                    <TwitterIcon color='primary' />
                  </a>
                </div>
              </Card>
            ))}
        </Slider>
      ) : (
        <div className={classes.container}>
          {board &&
            board.map((item, index) => (
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
                          style={{ filter: 'brightness(200%)' }}
                        />
                      </a>
                      <a href={item.acf.linkedin}>
                        <LinkedInIcon
                          color='primary'
                          fontSize='large'
                          style={{ filter: 'brightness(200%)' }}
                        />
                      </a>
                      <a href={item.acf.twitter}>
                        <TwitterIcon
                          color='primary'
                          fontSize='large'
                          style={{ filter: 'brightness(200%)' }}
                        />
                      </a>
                    </CardContent>
                  )}
                  <img className={classes.media} src={item.acf.image} alt={item.acf.name} />
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
  );
};

export default Board;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '80%',
    maxWidth: '80%',
    margin: '6em auto 5em',
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
    display: 'grid',
    gridGap:'10px',
    gridTemplateColumns: 'repeat(auto-fill,  minmax(180px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  card: {
    position: 'relative',
    minHeight: '23em',
    margin: '0 auto 1em',
    borderRadius: '15px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '12em',
      minWidth: '12em',
      minHeight: '26em',
      maxHeight: '26em',
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
    height: 200,
    borderRadius: '15px 15px 0 0',
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
    },
  },
}));
