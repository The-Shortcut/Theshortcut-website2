import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { allEvents, searchEvents, paginate as EVpaginate } from '../../../actions/eventActions';
import { teamMembers, boardMembers } from '../../../actions/teamActions';
import {
  postsData,
  paginate as POpaginate,
  postsCategoriesData,
  findPostsByCategory,
  searchPosts,
} from '../../../actions/postActions';

const SearchWebsite = () => {
  let query = window.location.search?.split('=')[1];
  const evIsLoading = useSelector((state) => state.events.isLoading);
  const poIsLoading = useSelector((state) => state.posts.isLoading);
  const dispatch = useDispatch();
  console.log({ evIsLoading, poIsLoading });
  useEffect(() => {
    if (evIsLoading && poIsLoading) {
      dispatch(allEvents());
      dispatch(postsData());
      dispatch(postsCategoriesData());
    } else {
      dispatch(searchEvents(query.toLowerCase()));
      dispatch(searchPosts(query.toLowerCase()));
    }
    dispatch(teamMembers());
    dispatch(boardMembers());
    dispatch(EVpaginate(1));
    dispatch(POpaginate(1));
  }, [dispatch, evIsLoading, poIsLoading, query]);
  if (!query) {
    return <Redirect to='/404' />;
  }
  return <div>all the matched items are listed here!!!</div>;
};

export default SearchWebsite;
