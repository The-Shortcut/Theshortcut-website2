import React, { useState } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Tabs, Tab } from '@material-ui/core';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { searchEvents, paginate } from '../../../actions/eventActions';

//Children
import Title from '../../custom/Title';
import SearchBox from '../../custom/SearchBox';

const SearchEvents = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { isLoading, searchTags } = useSelector((state) => state.events);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(searchEvents(event.target.innerText.toLowerCase()));
    dispatch(paginate(1))
  };
  /* console.log({ value, isLoading }) */;

  return (
    <div className={classes.root}>
      <Title>Search Events</Title>
      <SearchBox />
      <Collapse in={!isLoading}>
      <Tabs
        value={value}
        onChange={(event, newValue) => handleChange(event, newValue)}
        indicatorColor='primary'
        textColor='primary'
        classes={{ indicator: classes.shortIndicator }}
        centered>
        {searchTags.map((tag, index) => (
          <Tab key={index} label={tag.label} className={classes.tab} />
        ))}
        </Tabs>
        </Collapse>
    </div>
  );
};

export default SearchEvents;

const useStyles = makeStyles((theme) => ({
  root: {
    /* border: '1px solid red', */
    minWidth: '70%',
    maxWidth: '70%',
    margin: '4em auto',
    [theme.breakpoints.only('md')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
      margin: '2em auto',
    },
    display: 'flex',
    flexDirection: 'column',
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
