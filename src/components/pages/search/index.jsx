import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { allEvents } from '../../../actions/eventActions';
import { teamMembers, boardMembers } from '../../../actions/teamActions';
import { postsData, postsCategoriesData } from '../../../actions/postActions';
import { getFAQ, getServicesFAQ, getByobFAQ } from '../../../actions/docActions';
import { getResourcesData } from '../../../actions/resourceActions';

//Material-UI
import { makeStyles, fade } from '@material-ui/core/styles';
import { InputBase, CircularProgress } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Children
import Title from '../../custom/Title';
import FAQResut from './FAQResut';
import MemberResult from './MemberResult';
import PostResult from './PostResult';
import EventResult from './EventResult';
import ResourcesResult from './ResourcesResult';

const SearchWebsite = () => {
  const classes = useStyles();
  const [query, setQuery] = useState(window.location.search?.split('=')[1].replaceAll('%20', ' '));
  /*   let query = window.location.search?.split('=')[1]; */
  const evIsLoading = useSelector((state) => state.events.isLoading);
  const poIsLoading = useSelector((state) => state.posts.isLoading);
  const events = useSelector((state) => state.events.allEvents);
  const { posts } = useSelector((state) => state.posts);
  const { teammates, board } = useSelector((state) => state.team);
  const { faq_about, coachingFAQ, trainingFAQ, byobFAQ } = useSelector((state) => state.docs);
  const { resources } = useSelector((state) => state.resources);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
      setQuery(e.target.value);
    }
  };
  console.log({ query });

  useEffect(() => {
    if (!events) {
      dispatch(allEvents());
    }
    if (!posts) {
      dispatch(postsData());
      dispatch(postsCategoriesData());
    }
    if (!teammates) {
      dispatch(teamMembers());
      dispatch(boardMembers());
    }
    if (!faq_about) {
      dispatch(getFAQ());
    }
    if (!coachingFAQ || !trainingFAQ) {
      dispatch(getServicesFAQ());
    }
    if (!byobFAQ) {
      dispatch(getByobFAQ());
    }
    if (!resources) {
      dispatch(getResourcesData());
    }
  }, [
    faq_about,
    byobFAQ,
    coachingFAQ,
    dispatch,
    evIsLoading,
    events,
    poIsLoading,
    posts,
    query,
    teammates,
    trainingFAQ,
    resources,
  ]);

  let filteredEvents = events?.filter(
    (event) =>
      String(event.name.text).toLowerCase().includes(query) ||
      String(event.summary).toLowerCase().includes(query) ||
      event.status.toLowerCase().includes(query)
  );
  let filteredPosts = posts?.filter(
    (post) =>
      post.title.rendered.toLowerCase().includes(query) ||
      post.content.rendered.toLowerCase().includes(query)
  );
  let filteredResources = resources?.filter(({ acf }) => acf.value.toLowerCase().includes(query));
  let filteredTeam = teammates?.filter(
    ({ acf }) =>
      acf.name.toLowerCase().includes(query) || acf.position.toLowerCase().includes(query)
  );
  let filteredBoard = board?.filter(
    ({ acf }) =>
      acf.name.toLowerCase().includes(query) || acf.position.toLowerCase().includes(query)
  );
  let filteredAboutFAQ = faq_about?.filter(
    ({ acf }) =>
      acf.question.toLowerCase().includes(query) || acf.answer.toLowerCase().includes(query)
  );
  let filteredcoachingFAQ = coachingFAQ?.filter(
    ({ acf }) =>
      acf.question.toLowerCase().includes(query) || acf.answer.toLowerCase().includes(query)
  );
  let filteredtrainingFAQ = trainingFAQ?.filter(
    ({ acf }) =>
      acf.question.toLowerCase().includes(query) || acf.answer.toLowerCase().includes(query)
  );
  let filteredbyobFAQ = byobFAQ?.filter(
    ({ acf }) =>
      acf.question.toLowerCase().includes(query) || acf.answer.toLowerCase().includes(query)
  );
  let totalQuery =
    filteredEvents?.length +
    filteredPosts?.length +
    filteredResources?.length +
    filteredTeam?.length +
    filteredBoard?.length +
    filteredAboutFAQ?.length +
    filteredcoachingFAQ?.length +
    filteredtrainingFAQ?.length +
    filteredbyobFAQ?.length;

  if (!query) {
    return <Redirect to='/404' />;
  }
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search…'
          onKeyDown={handleSearch}
          onFocus={(e) => e.target.select()}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Title>
        Found {totalQuery ? totalQuery : '0'} matches for query "{query}"
      </Title>
      <section className={classes.resultSection}>
        {filteredEvents ? (
          filteredEvents?.map((event) => (
            <EventResult event={event} route={`/events?filtered=${query}`} page='Event' />
          ))
        ) : (
          <div className={classes.spinner}>
            <CircularProgress disableShrink />
          </div>
        )}
        {filteredPosts ? (
          filteredPosts?.map((post) => (
            <PostResult post={post} route={`/blog/${post.slug}`} page='Blog' />
          ))
        ) : (
          <div className={classes.spinner}>
            <CircularProgress disableShrink />
          </div>
        )}
        {filteredResources ? (
          filteredResources?.map(({ acf }) => (
            <ResourcesResult
              resource={acf}
              route='/community#resources'
              page='Community'
              section='Resources'
            />
          ))
        ) : (
          <div className={classes.spinner}>
            <CircularProgress disableShrink />
          </div>
        )}
        {filteredTeam ? (
          filteredTeam?.map(({ acf }) => (
            <MemberResult member={acf} route='/about#our-team' page='About Us' section='Our Team' />
          ))
        ) : (
          <div className={classes.spinner}>
            <CircularProgress disableShrink />
          </div>
        )}
        {filteredBoard ? (
          filteredBoard?.map(({ acf }) => (
            <MemberResult
              member={acf}
              route='/about#our-board'
              page='About Us'
              section='Our Board'
            />
          ))
        ) : (
          <div className={classes.spinner}>
            <CircularProgress disableShrink />
          </div>
        )}
        {filteredAboutFAQ ? (
          filteredAboutFAQ?.map(({ acf }) => (
            <FAQResut faq={acf} route='/contact-us#faq' page='Contact Us' section='FAQ' />
          ))
        ) : (
          <div className={classes.spinner}>
            <CircularProgress disableShrink />
          </div>
        )}
        {filteredcoachingFAQ ? (
          filteredcoachingFAQ?.map(({ acf }) => (
            <FAQResut faq={acf} route='/services#services-faq' page='Services' section='FAQ' />
          ))
        ) : (
          <div className={classes.spinner}>
            <CircularProgress disableShrink />
          </div>
        )}
        {filteredtrainingFAQ ? (
          filteredtrainingFAQ?.map(({ acf }) => (
            <FAQResut faq={acf} route='/services#services-faq' page='Services' section='FAQ' />
          ))
        ) : (
          <div className={classes.spinner}>
            <CircularProgress disableShrink />
          </div>
        )}
        {filteredbyobFAQ ? (
          filteredbyobFAQ?.map(({ acf }) => (
            <FAQResut faq={acf} route='/events/byob#byob-faq' page='Events/BYOB' section='FAQ' />
          ))
        ) : (
          <div className={classes.spinner}>
            <CircularProgress disableShrink />
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchWebsite;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.spacing(14),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  resultSection: {
    minWidth: '80%',
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: fade(theme.palette.common.white, 0.9),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.9),
    },
    marginLeft: 0,
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    border: 'solid 1px #343434',
    borderRadius: '50px',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '40ch',
      },
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
    },
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
