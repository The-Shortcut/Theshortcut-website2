import React, { useEffect } from 'react';

// image
import heroImage from '../../../assets/photos/home_hero.jpg';

//Materail-UI
import { Typography } from '@material-ui/core';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { allEvents } from '../../../actions/eventActions';
import { teamMembers, boardMembers } from '../../../actions/teamActions';
import { postsData } from '../../../actions/postActions';

const LandingPage = () => {
  const { teammates, board } = useSelector((state) => state.team);
  const events = useSelector((state) => state.events.allEvents);
  const posts = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allEvents());
    dispatch(teamMembers());
    dispatch(boardMembers());
    dispatch(postsData());
  }, [dispatch]);

  /* console.log({ events, posts, teammates, board }); */
  return (
    <div>
      <img src={heroImage} alt='home_hero_image' width='100%' />
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
      <Typography variant='h1'>This is LandingPage page.</Typography>
    </div>
  );
};

export default LandingPage;
