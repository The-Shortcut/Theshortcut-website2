import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Material-UI
import { InputBase } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');

  if (query !== '') {
    return <Redirect to={{ pathname: '/search', search: `?query=${query.toLowerCase()}` }} />;
  }

  const handleSearch = (e) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
      setQuery(e.target.value);
    }
  };

  /*   console.log({ query }); */
  return (
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
  );
};

export default Search;

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: fade(theme.palette.common.white, 0.9),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: '80%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: theme.spacing(2),
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
    border: 'solid 1px #444',
    borderRadius: '50px',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '30ch',
      },
    },
    [theme.breakpoints.down('xs')]: {
      border: 'none',
    },
  },
}));
