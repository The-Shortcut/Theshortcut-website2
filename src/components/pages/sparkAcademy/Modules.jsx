import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const modules = [
  {
    title: 'Entrepreneurship ',
    description:
      'You will learn the fundamental tools to create a viable company in four weeks. Each participant will receive personal mentoring from business experts to develop your own business plan.',
  },
  {
    title: 'Digital Marketing & Growth Hacking',
    description:
      'You will learn the fundamental tools to create a viable company in four weeks. Each participant will receive personal mentoring from business experts to develop your own business plan.',
  },
  {
    title: 'Full-stack Development',
    description:
      'You will learn front and back-end development, including building a website and performing tasks related to website architecture. These are highly sought-after skills, which will enable you to get started on developing your own product, or improve your employability in the ecosystem. ',
  },
];

const settings = {
  dots: true,
  dotsClass: 'slick-dots slick-thumb',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      },
    },
  ],
  nextArrow: (
    <div>
      <PlayCircleOutlineIcon color='inherit' style={{ fontSize: '2rem', color: '#497C7A' }} />
    </div>
  ),
  prevArrow: (
    <div>
      <PlayCircleOutlineIcon
        color='inherit'
        style={{
          fontSize: '2rem',
          color: '#497C7A',
          transform: 'scaleX(-1)',
        }}
      />
    </div>
  ),
};

const Modules = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Slider {...settings}>
          {modules.map((item, index) => (
            <div key={index} className={classes.item}>
              <div className={classes.box}>
                <Typography variant='h3' className={classes.title}>
                  {item.title}
                </Typography>
                <br />
                <br />
                <Typography variant='body1' className={classes.text}>
                  {item.description}
                </Typography>
                <Button className={classes.btn}>LEARN MORE</Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Modules;

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: '#fff',
    padding: theme.spacing(2),
  },
  root: {
    maxWidth: '70%',
    margin: '6em auto',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  item: {
    padding: theme.spacing(6),
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#FDEFE4',
    boxShadow: ' 0px 0px 22px -5px #434343',
    padding: theme.spacing(6),
  },
  title: {
    fontFamily: 'Noto Serif Display',
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      fontSize: '1.5rem',
    },
  },
  text: {
    fontFamily: 'Raleway',
  },
  btn: {
    backgroundColor: '#497C7A',
    color: '#FDEFE4',
    width: '14em',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    fontWeight: 'bolder',
    fontSize: '1.2rem',
    padding: 10,
    marginTop: 30,
    '&:hover': {
      backgroundColor: '#60aba8',
    },
  },
  section: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  quote: {
    margin: 'auto 1em',
    [theme.breakpoints.up('sm')]: {
      margin: 'auto 2em',
    },
  },
}));
