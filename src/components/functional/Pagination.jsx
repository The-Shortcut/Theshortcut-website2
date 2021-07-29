import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Pagination, PaginationItem } from '@material-ui/lab';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { paginate as EvPaginate } from '../../actions/eventActions';
import { paginate as PoPaginate } from '../../actions/postActions';

const PaginationOutlined = () => {
  const classes = useStyles();

  const { perPage, currentPage, totalItems } = useSelector((state) => {
    if (window.location.pathname === '/events') {
      return state.events;
    } else if (window.location.pathname === '/blog') {
      return state.posts;
    }
  });
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    if (window.innerWidth < 600) {
      window.scrollTo({
        top: 830,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 1120,
        behavior: 'smooth',
      });
    }
    if (window.location.pathname === '/events') {
      dispatch(EvPaginate(value));
    } else if (window.location.pathname === '/blog') {
      dispatch(PoPaginate(value));
    }
  };

  return (
    <div className={classes.root}>
      <Pagination
        page={currentPage}
        count={Math.ceil(totalItems / perPage)}
        onChange={(event, value) => handleChange(event, value)}
        variant='outlined'
        color='primary'
        renderItem={(item) => (
          <PaginationItem
            {...item}
            classes={{
              root: classes.button,
              selected: classes.selectedItem,
              focusVisible: classes.focusedItem,
            }}
          />
        )}
      />
    </div>
  );
};
export default PaginationOutlined;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: '1em auto',
    },
  },
  button: {
    fontFamily: 'trispace',
    borderRadius: '16px',
    fontWeight: '900',
    fontSize: '0.7rem',
    color: '#505050',
    backgroundColor: '#ffffff',
  },
  selectedItem: {
    backgroundColor: '#00A99D !important',
    color: '#ffffff !important',
  },
  focusedItem: {
    backgroundColor: '#00A99D !important',
  },
}));
