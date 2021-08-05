import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, Tabs, Tab, Typography } from '@material-ui/core';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { findPostsByCategory, paginate } from '../../../actions/postActions';

//Children
import SearchBox from './SearchBox';

const CategoriesList = ({ value, setValue, executeScrollPosts }) => {
  const classes = useStyles();
  const { isLoading, categories } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue({ number: newValue, title: event.target.innerText.toLowerCase() });
  };

  const handleClick = (cat) => {
    dispatch(findPostsByCategory(cat));
    dispatch(paginate(1));
    executeScrollPosts()
  };

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <SearchBox setValue={setValue} />
        <Collapse in={!isLoading}>
          <Typography className={classes.cat}>Categories:</Typography>
          <Tabs
            value={value.number}
            orientation='vertical'
            onChange={(event, newValue) => handleChange(event, newValue)}
            aria-label='Posts categories'
            indicatorColor='primary'
            textColor='secondary'
            classes={{ indicator: classes.shortIndicator }}
            className={classes.tabs}
            centered>
            {categories.map((cat, index) => (
              <Tab
                key={index}
                label={cat.name}
                className={classes.tab}
                onClick={() => handleClick(cat)}
              />
            ))}
          </Tabs>
        </Collapse>
      </div>
    </div>
  );
};

export default CategoriesList;

const useStyles = makeStyles((theme) => ({
  main: {
    margin: 'auto',
  },
  root: {
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
    minWidth: '9em',
    maxHeight: '3px',
    marginTop: 35,
    marginRight: 31,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 80,
      height: 4,
      marginLeft: theme.spacing(5),
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 21,
    }
  },
  cat: {
    fontWeight: 'bold',
    marginTop: 25,
  },
  tab: {
    border: '1px solid #888888',
    borderRadius: '20px',
    margin: 5,
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
  },
}));
