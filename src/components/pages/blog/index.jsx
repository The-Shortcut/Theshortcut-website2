import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Meta Tag
import MetaTag from '../../utils/MetaTag';

// Hero Image
import heroImage from '../../../assets/photos/blogHero.png';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { postsData, paginate, postsCategoriesData } from '../../../actions/postActions';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CircularProgress } from '@material-ui/core';

// Children
import SkeletonPost from '../../functional/SkeletonPost';
import PaginationOutlined from '../../functional/Pagination';
import FeaturedBlog from './FeaturedBlog';
import CategoriesList from './CategoriesList';
import SingleBlog from './SingleBlog';

const Blog = () => {
  const classes = useStyles();
  const {
    isLoading,
    categories,
    featuredBlog,
    filteredPosts,
    currentPage,
    currentItems,
    categoryTerm,
  } = useSelector((state) => state.posts);
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    history.push({
      pathname: '/blog',
      search: `?category=${categoryTerm}`,
    });
  }, [history, categoryTerm]);

  useEffect(() => {
    if (isLoading) {
      dispatch(postsData());
      dispatch(postsCategoriesData());
    } else {
      dispatch(paginate(currentPage));
    }
  }, [currentPage, dispatch, isLoading]);

  return (
    <div>
      <MetaTag
        title='Blog | The Shortcut'
        description='Blog page.'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/about-us.png'
      />
      {window.innerWidth < 960 ? (
        <img
          src={heroImage}
          width='100%'
          height='auto'
          alt='about-page'
          style={{ filter: 'brightness(40%)' }}
        />
      ) : (
        <div className={classes.hero} />
      )}
      <Typography variant='h1' className={classes.title}>
            Blog
          </Typography>
      {isLoading ? (
          <SkeletonPost />
      ) : (
        <div className={classes.root}>
          <section className={classes.topSection}>
            <FeaturedBlog blog={featuredBlog} />
            <CategoriesList categories={categories} />
          </section>
          <section className={classes.itemsSection}>
            <div className={classes.container}>
              {currentItems.map((blog) => (
                <SingleBlog key={blog.id} blog={blog} />
              ))}
            </div>
          </section>
          {filteredPosts.length > 10 && <PaginationOutlined />}
        </div>
      )}
    </div>
  );
};

export default Blog;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto -4em',
    minWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '50vh',
    maxHeight: '50vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
    zIndex: -1,
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
    marginTop: '-2em',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '-2.4em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-1.5em',
    },
  },
  container: {
    margin: '3em auto',
    minWidth: '80%',
    maxWidth: '80%',
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
      maxWidth: '100%',
    },
    display: 'grid',
    gridGap: '25px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
  },
  topSection: {
    margin: 'auto',
    minWidth: '80%',
    maxWidth: '80%',
    [theme.breakpoints.only('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemsSection: {
    minWidth: '100%',
    background: '#DDD',
    border: '1px solid #DDD',
    margin: 0,
  },
}));
