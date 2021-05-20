import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Pagination, PaginationItem } from '@material-ui/lab';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { paginate } from '../../actions/eventActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginTop: theme.spacing(2),
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

const PaginationOutlined = () => {
  const classes = useStyles();

  const { perPage, currentPage, totalItems } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    if (window.innerWidth < 600) {
      window.scrollTo({
        top: 580,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 640,
        behavior: 'smooth',
      });
      }
    dispatch(paginate(value));
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