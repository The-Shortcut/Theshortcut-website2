import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import MetaTag from '../../utils/MetaTag';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { singlePostData } from '../../../actions/postActions';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const Post = () => {
  const classes = useStyles();
  let { id } = useParams();
  const { postIsLoading, singlePost } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singlePostData(id));
  }, [dispatch, id]);
  console.log({ id, singlePost });

  if (postIsLoading) {
    return (
      <div className={classes.spinner}>
        <CircularProgress disableShrink />
      </div>
    );
  }

  return (
    <div>
      <MetaTag
        title={`${singlePost.slug} | The Shortcut`}
        description={singlePost.title.rendered}
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/homepage-2.png'
      />
      <iframe
        id="frameContainer"
        className={classes.frame}
        title='book a visit panel'
        src={singlePost.link}
        allowpaymentrequest='true'
        referrerpolicy='no-referrer'></iframe>
    </div>
  );
};

export default Post;

const useStyles = makeStyles((theme) => ({
  frame: {
    minWidth: '100vw',
    minHeight: '100vh',
    marginTop: '15px',
    border: 'none',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '100vw',
    minHeight: '100vh',
  },
  cat: {
    zIndex: 100,
    position: 'absolute',
    marginTop: '-12em',
  },
}));
