import React from 'react';

// REDUX
import { findPostsByCategory,paginate } from '../../../actions/postActions';
import { useSelector, useDispatch } from 'react-redux';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const CategoriesList = ({ categories }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = (cat) => {
      dispatch(findPostsByCategory(cat));
      dispatch(paginate(1))
  };

  return (
    <div className={classes.root}>
      <h2>CATEGORIES</h2>
      <table className={classes.table}>
        {categories.map((cat) => (
          <tr key={cat.id} className={classes.cat} onClick={() => handleClick(cat)}>
            <td>{cat.name}</td>
            <td>{cat.count}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CategoriesList;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '3.5em auto 8em',
    minWidth: '30%',
    maxWidth: '30%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '90%',
      margin: '1.5em auto',
    },
  },
  table: {
    border: '1px solid #EEE',
    borderRadius: '5px',
    borderCollapse: 'collapse',
    fontSize: '1.2rem',
    fontWeight: 500,
    width: '100%',
  },
  '@global': {
    'tr:nth-child(even)': {
      backgroundColor: '#DDD',
    },
    'th, td': {
      padding: '0.3em',
    },
  },
  cat: {
    '&:hover': {
      cursor: 'pointer',
      fontWeight: 700,
    },
  },
}));
