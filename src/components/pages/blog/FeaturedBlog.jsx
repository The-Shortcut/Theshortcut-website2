import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { BsTextIndentLeft } from 'react-icons/bs';

const FeaturedBlog = ({ blog }) => {
  const classes = useStyles();
  const [image, setImage] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getImage = React.useCallback(async () => {
    let response = await axios.get(
      `https://theshortcut.org/wp-json/wp/v2/media/${blog.featured_media}`
    );
    let source = response.data.media_details.sizes.medium_large.source_url;
    return setImage(source);
  });

  useEffect(() => {
    getImage();
  }, [getImage]);

  const formatDate = (evDate) => {
    let dateArr = evDate.split(/\D/);
    let dateObj = new Date(evDate);
    let monthName = dateObj.toLocaleString('default', { month: 'long' });
    return `${monthName} ${dateArr[2]}, ${dateArr[0]}`;
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
        to={`/blog/${blog.id}`}
        style={{ textDecoration: 'none', height: '100%' }}>
        <img src={image} alt='blog_image' className={classes.image} />
      </Link>
      <Typography variant='body1' dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }} />
      <Link
        underline='none'
        to={`/blog/${blog.id}`}
        style={{ textDecoration: 'none', height: '100%' }}>
        <Button
          color='primary'
          endIcon={<BsTextIndentLeft />}
          style={{ float: 'right', marginRight: 30 }}
          onClick={() => console.log(blog)}>
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
}));
