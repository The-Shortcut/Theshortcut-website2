import React from 'react';

// Material-IU
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { searchEvents, paginate as eventPaginate  } from '../../actions/eventActions';
import { paginate as postPaginate } from '../../actions/postActions';

const SearchBox = ({ placeHolder, setValue}) => {
  const classes = useStyles();
  const eventLoading = useSelector((state) => state.events.isLoading);
  const postsLoading = useSelector(state => state.posts.isLoading);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    let { value } = e.target;
    if (value !== '') {
      setValue(0)
    }
    if (!eventLoading) {
      dispatch(searchEvents(value));
      dispatch(eventPaginate(1));
    }
    /* if (!postsLoading) {
      dispatch(searchPosts(value));
      dispatch(postPaginate(1));
    } */
  };

  return (
    <Paper className={classes.root}>
      <IconButton type='submit' className={classes.searchBtn} aria-label='search events'>
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder={placeHolder}
        inputProps={{ 'aria-label': placeHolder }}
        onChange={handleSearch}
        onFocus={(e) => e.target.select()}
      />
    </Paper>
  );
};

export default SearchBox;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '25px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    minWidth: '16em',
    borderRadius: '25px',
    [theme.breakpoints.only('sm')]: {
      minWidth: '12em',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '10em',
    },
    [`& fieldset`]: {
      borderRadius: '25px',
    },
    /* minWidth: '25em',
    [`& fieldset`]: {
      borderRadius: '4px 0 0 4px',
    },
    [theme.breakpoints.only('sm')]: {
      minWidth: '10em',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '9em',
    }, */
  },
  searchBtn: {
    padding: 10,
  },
}));
