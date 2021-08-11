import React from 'react';

// Material-IU
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// REDUX
import { useDispatch } from 'react-redux';
import { searchPosts, paginate } from '../../../actions/postActions';

const SearchBox = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    let { value } = e.target;
    dispatch(searchPosts(value));
    dispatch(paginate(1));
  };
  const handleClick = (e) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
      window.scrollTo({
        top: 830,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Paper className={classes.root}>
      <IconButton type='submit' className={classes.searchBtn} aria-label='search posts'>
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder='Search Posts ...'
        inputProps={{ 'aria-label': 'search posts' }}
        onChange={handleSearch}
        onKeyDown={handleClick}
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
