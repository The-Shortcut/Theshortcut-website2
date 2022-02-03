import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const modules = [
  {
    title: '1 Entrepreneurship ',
    description:
      'You will learn the fundamental tools to create a viable company in four weeks. Each participant will receive personal mentoring from business experts to develop your own business plan.',
    info: [
      {
        subTitle: "What you'll learn",
        options: [
          'Develop a feasible business plan',
          'Secure public and private funding',
          'Basic Marketing & Branding',
          'Pitching skills',
        ],
      },
      {
        subTitle: 'Module includes',
        options: [
          "Workshops & lectures by industry experts & 'startup doers'",
          'Career coaching & soft skill development training',
          'Opportunities to network',
        ],
      },
      {
        subTitle: 'Who it is for',
        options: [
          'You have a business idea and intend to start your own business in Finland',
          'You strongly believe that entrepreneurship is the best way for you to reach your goals',
          'fluent in spoken and written English',
          'Commitment to all 4 weeks of the module',
        ],
      },
      {
        subTitle: 'Duration',
        options: ['4 - 29 April 2022', 'Monday - Thursday ', '9:30 - 12:00'],
      },
    ],
  },
  {
    title: '2 Digital Marketing & Growth Hacking',
    description:
      'You will learn the fundamental tools to create a viable company in four weeks. Each participant will receive personal mentoring from business experts to develop your own business plan.',
    info: [
      {
        subTitle: "What you'll learn",
        options: [
          'Digital marketing skills',
          'Google Analytics, SEO/SEM',
          'social media management, content creation',
          'growth marketing & growth mindset approach',
        ],
      },
      {
        subTitle: 'Module includes',
        options: [
          'Workshops & lectures by marketing experts',
          'Career coaching & soft skill development training',
          'Opportunities to network',
        ],
      },
      {
        subTitle: 'Who it is for',
        options: [
          'You are pursuing a career in digital marketing and growth hacking field',
          'You need digital marketing and growth hacking skills to run your own business',
          'Fluent in spoken and written English',
          'Commitment to all 6 weeks of the module',
        ],
      },
      {
        subTitle: 'Duration',
        options: ['2 May - 17 June 2022', 'Monday - Thursday ', '9:30 - 12:00'],
      },
    ],
  },
  {
    title: '3 Full-stack Development',
    description:
      'You will learn front and back-end development, including building a website and performing tasks related to website architecture. These are highly sought-after skills, which will enable you to get started on developing your own product, or improve your employability in the ecosystem. ',
    info: [
      {
        subTitle: "What you'll learn",
        options: [
          'Front-end web development with JavaScript',
          'React, components, and lifecycle methods',
          'Getting to know SQL and NoSQL',
          'Understanding APIs and introduction full-stack projects',
        ],
      },
      {
        subTitle: 'Module includes',
        options: [
          'Workshops & lectures by professional developers',
          'Career coaching & soft skill development training',
          'Opportunities to network',
        ],
      },
      {
        subTitle: 'Who it is for',
        options: [
          'You have a higher education degree',
          'You have previous IT or coding experience OR you are highly-motivated to learn',
          'ou are fluent in written and spoken English, with a curious and attitude and committed until the end of the training',
        ],
      },
      {
        subTitle: 'Duration',
        options: [
          '15 August - 16 December 2022',
          'Monday - Thursday ',
          '9:00 - 15:00',
          '30 hours per week contact learning, plus 10-15 hours of independent study',
        ],
      },
    ],
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
                  <i class='fas fa-hashtag'></i>
                  {item.title}
                </Typography>
                <br />
                <br />
                <Typography variant='body1' className={classes.text}>
                  {item.description}
                </Typography>
                {/* <Button className={classes.btn}>LEARN MORE</Button> */}
                <br />
                <br />
                <Grid container spacing={3} className={classes.grid}>
                  {item.info.map((el, i) => (
                    <Grid xs={12} sm={5} className={classes.gridItem} key={index}>
                      <Typography variant='subtitle1'>{el.subTitle}</Typography>
                      <ul style={{ textAlign: 'left' }}>
                        {el.options.map((opt, i) => (
                          <li key={i}>{opt}</li>
                        ))}
                      </ul>
                    </Grid>
                  ))}
                </Grid>
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
  grid: {
    margin: 'auto',
    minWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  gridItem: {
    color: '#000',
    backgroundColor: '#fff',
    /* minHeight: '7em', */
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'strech',
    justifyContent: 'flex-start',
    margin: theme.spacing(1),
    minWidth: '46%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
    padding: '10px 3px',
  },
}));
