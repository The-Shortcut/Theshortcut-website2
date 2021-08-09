import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
/* import axios from 'axios'; */

import dImage from '../../../assets/photos/defaultImage.png';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { BsTextIndentLeft } from 'react-icons/bs';

// REDUX
import { useSelector } from 'react-redux';

// Analytics
import analytics from '../../functional/analytics';

const FeaturedBlog = ({ blog }) => {
  const classes = useStyles();
  const imgRef = useRef();

  const { categories } = useSelector((state) => state.posts);
  let myCat = categories.filter((cat) => blog.categories.includes(cat.id));
  let myCatTitles = myCat.map((cat) => cat.name);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.firstElementChild.style.width = '100%';
      imgRef.current.firstElementChild.style.height = '21em';
      imgRef.current.firstElementChild.style.objectFit = 'cover';
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getImage = () => {
    let images = blog.content.rendered.match(/<img.*?src="(.*?)"[^\>]+>/g);
    if (images === null) {
      return null;
    } else {
      return images.slice(-1)[0];
    }
  };

  const formatDate = (evDate) => {
    let dateArr = evDate.split(/\D/);
    let dateObj = new Date(evDate);
    let monthName = dateObj.toLocaleString('default', { month: 'long' });
    return `${monthName} ${dateArr[2]}, ${dateArr[0]}`;
  };

  const handleAnalysis = (targetEvent) => {
    analytics.sendEvent({
      category: 'Select Post',
      label: targetEvent.title.rendered,
      value: 1,
    });
  };

  return (
    <div className={classes.card}>
      <Typography
        variant='h3'
        dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
        className={classes.title}
      />
      <div className={classes.dateMark}>
        <div className={classes.leftLine} />
        <Typography variant='subtitle1' className={classes.date}>
          {formatDate(blog.date)}
        </Typography>
        <div className={classes.rightLine} />
      </div>
      <Link
        underline='none'
        to={`/blog/${blog.slug}`}
        onClick={() => handleAnalysis(blog)}
        style={{ textDecoration: 'none', height: '100%' }}>
        {getImage() ? (
          <div ref={imgRef} dangerouslySetInnerHTML={{ __html: getImage() }} />
        ) : (
          <img src={dImage} alt='default_blog_image' className={classes.image} />
        )}
      </Link>
      <Typography variant='subtitle2' className={classes.cat}>
        {myCatTitles.length === 1 ? 'Caterogy' : 'Categories'}: {myCatTitles.join(' , ')}
      </Typography>
      <Typography variant='body1' dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }} />
      <Link
        underline='none'
        to={`/blog/${blog.slug}`}
        style={{ textDecoration: 'none', height: '100%' }}>
        <Button
          color='primary'
          endIcon={<BsTextIndentLeft />}
          style={{ float: 'right', marginRight: 30 }}
          onClick={() => handleAnalysis(blog)}>
          Read more
        </Button>
      </Link>
    </div>
  );
};

export default FeaturedBlog;

const useStyles = makeStyles((theme) => ({
  card: {
    margin: '4em auto 8em',
    minWidth: '60%',
    maxWidth: '60%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '65%',
      maxWidth: '65%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '85%',
      maxWidth: '85%',
      margin: '2em auto',
    },
  },
  title: {
    margin: 'auto',
    textAlign: 'center',
  },
  dateMark: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    margin: 'auto 1em',
    fontStyle: 'italic',
    [theme.breakpoints.down('xs')]: {
      color: '#00A99d',
    },
  },
  leftLine: {
    width: 0,
    height: 0,
    borderTop: '3px solid transparent',
    borderBottom: '3px solid transparent',
    borderRight: '11em solid #00A99D',
    [theme.breakpoints.down('sm')]: {
      borderRight: '8.5em solid #00A99D',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  rightLine: {
    width: 0,
    height: 0,
    borderTop: '3px solid transparent',
    borderBottom: '3px solid transparent',
    borderLeft: '11em solid #00A99D',
    [theme.breakpoints.down('sm')]: {
      borderLeft: '8.5em solid #00A99D',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  image: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '21em',
    maxHeight: '21em',
    objectFit:'cover'
  },
  cat: {
    background: '#434343',
    color: '#FFFFFF',
    marginTop: '-7px',
    paddingLeft: 10,
  },
}));
