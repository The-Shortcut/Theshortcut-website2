import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Tabs, Tab } from '@material-ui/core';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { searchEvents, paginate } from '../../../actions/eventActions';

//Children
import SearchBox from './SearchBox';

const SearchEvents = ({ value, setValue, searchRef }) => {
  const classes = useStyles();
  const { isLoading, searchTags } = useSelector((state) => state.events);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(searchEvents(event.target.innerText.toLowerCase()));
    dispatch(paginate(1));
  };
  return (
    <div className={classes.main} ref={searchRef}>
      <div className={classes.root}>
        <SearchBox setValue={setValue} />
        <Collapse in={!isLoading}>
          <Tabs
            value={value}
            onChange={(event, newValue) => handleChange(event, newValue)}
            indicatorColor='primary'
            textColor='primary'
            classes={{ indicator: classes.shortIndicator }}
            className={classes.tabs}
            centered>
            {searchTags.map((tag, index) => (
              <Tab key={index} label={tag.label} className={classes.tab} />
            ))}
          </Tabs>
        </Collapse>
      </div>
    </div>
  );
};

export default SearchEvents;

const useStyles = makeStyles((theme) => ({
  main: {
    minWidth: '100%',
    border: '1px solid #DDDDDD',
    background: '#DDDDDD',
  },
  root: {
    minWidth: '60%',
    maxWidth: '60%',
    margin: '2em auto 1em',
    [theme.breakpoints.only('md')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '80%',
      maxWidth: '80%',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shortIndicator: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 80,
      height: 4,
      marginLeft: theme.spacing(5),
    },
  },
  tab: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
  },
}));
