import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Redux
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  snackBar: {
    background: '#ffc107',
    color: '#000',
  },
}));

const CovidBanner = () => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const { postIsLoading } = useSelector((state) => state.posts);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{display: !postIsLoading ? 'none' : 'block'}}>
      <Snackbar
        anchorOrigin={
          window.innerWidth > 960
            ? {
                vertical: 'top',
                horizontal: 'right',
              }
            : {
                vertical: 'bottom',
                horizontal: 'center',
              }
        }
        open={open}
        /* autoHideDuration={6000} */
        ContentProps={{ className: classes.snackBar }}
        onClose={handleClose}
        message={
          <Typography variant='body1'>
            <strong>COVID-19:</strong> We have restricted openings. Please book your visit in advance.
          </Typography>
        }
        action={
          <React.Fragment>
            <a href='/visit'>
              <Button
                color='inherit'
                style={{ fontSize: '1.2rem' }}
                size='large'
                onClick={handleClose}>
                here
              </Button>
            </a>
            <IconButton size='small' aria-label='close' color='#ffc107' onClick={handleClose}>
              <CloseIcon fontSize='small' />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};
export default CovidBanner;
