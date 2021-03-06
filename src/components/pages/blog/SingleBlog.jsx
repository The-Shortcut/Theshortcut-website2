import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Default Image
import dImage from '../../../assets/photos/defaultImage.png';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { BsTextIndentLeft } from 'react-icons/bs';

// REDUX
import { useSelector } from 'react-redux';

const SingleBlog = ({ blog }) => {
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
    let images = blog.content.rendered.match(/<img.*?src="(.*?)"[^>]+>/g);
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

  return (
    <div key={blog.id} className={classes.card}>
      <Typography
        variant='h4'
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
        <Button color='primary' endIcon={<BsTextIndentLeft />} className={classes.btn}>
          Read more
        </Button>
      </Link>
    </div>
  );
};

export default SingleBlog;

const useStyles = makeStyles((theme) => ({
  card: {
    /*     border:'1px solid red', */
    background: '#DDD',
    borderRadius: '10px',
    margin: '2em auto 1em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    maxWidth: '380px',
  },
  title: {
    margin: 'auto',
    textAlign: 'center',
    minHeight: '4em',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
    borderRight: '5em solid #00A99D',
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
    borderLeft: '5em solid #00A99D',
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
  },
  btn: {
    minWidth: '140px',
    maxWidth: '140px',
    alignSelf: 'flex-end',
  },
  cat: {
    background: '#434343',
    color: '#FFFFFF',
    marginTop: '-7px',
    paddingLeft: 10,
  },
}));
