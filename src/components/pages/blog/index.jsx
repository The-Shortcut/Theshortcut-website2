import React, { useEffect } from 'react';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { postsData } from '../../../actions/postActions';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const Blog = () => {
  const classes = useStyles();
  const { isLoading, posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsData());
  }, [dispatch]);
  console.log({ isLoading, posts });
  return <div className={classes.root}>the blog page is find here.</div>;
};

export default Blog;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
}));
