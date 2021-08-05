import React from 'react';

// Material-IU
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// REDUX
import { useDispatch } from 'react-redux';
import { searchEvents, paginate as eventPaginate  } from '../../../actions/eventActions';

const SearchBox = ({setValue}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    let { value } = e.target;
    if (value !== '') {
      setValue(0)
    }
      dispatch(searchEvents(value));
      dispatch(eventPaginate(1));
  };

  return (
    <Paper className={classes.root}>
      <IconButton type='submit' className={classes.searchBtn} aria-label='search events'>
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Events ..."
        inputProps={{ 'aria-label': "search events" }}
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
