import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

// REDUX
import { getStories } from '../../../actions/storiesAction';
import { useSelector, useDispatch } from 'react-redux';

//Children
import Title from '../../custom/Title';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  /* nextArrow: (
    <div>
      <PlayCircleOutlineIcon color='inherit' style={{ fontSize: '2rem', color: '#434343' }} />
    </div>
  ),
  prevArrow: (
    <div>
      <PlayCircleOutlineIcon
        color='inherit'
        style={{
          fontSize: '2rem',
          color: '#434343',
          transform: 'scaleX(-1)',
        }}
      />
    </div>
  ), */
};

const SuccessStories = () => {
  const classes = useStyles();
  const { successStories } = useSelector((state) => state.stories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Title>Success Stories</Title>
        {successStories && (
          <Slider {...settings}>
            {successStories.map(({ acf }, index) => (
              <div key={index}>
                <div className={classes.item}>
                  <img src={acf.image.url} alt={acf.participant_name} className={classes.photo} />
                  <section>
                    {/* <Typography variant='body1' className={classes.story}>
                    {acf.story}
                  </Typography> */}
                    <Typography variant='body2' style={{ padding: '1em' }}>
                      <span style={{ fontSize: '3rem' }}>&#8220;</span>
                      {acf.quote}
                    </Typography>
                    <Typography variant='subtitle2' style={{ textAlign: 'center' }}>
                      {acf.participant_name}
                    </Typography>
                    <Button variant='outlined' color='primary' className={classes.button}>
                      Read Story
                    </Button>
                  </section>
                </div>
              </div>
            ))}
          </Slider>
        )}
        <div id='faq' />
      </div>
    </div>
  );
};

export default SuccessStories;

const useStyles = makeStyles((theme) => ({
  main: {
    background: '#DDDDDD',
    border: '1px solid #DDDDDD',
    margin:'5em auto'
  },
  root: {
    maxWidth: '70%',
    margin: '5em auto',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  photo: {
    flex: 1,
    minWidth: '180px',
    maxWidth: '180px',
    minHeight: '220px',
    maxHeight: '220px',
    [theme.breakpoints.down('sm')]: {
      minWidth: '90px',
      maxWidth: '90px',
      minHeight: '110px',
      maxHeight: '110px',
      marginLeft: '1em',
    },
    border: '2px solid #434343',
    borderRadius: '15px',
    marginLeft: '5em',
  },
  button: {
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '5.5em',
    },
  },
}));
