import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '80%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  snackBar: {
    background: theme.palette.primary.main,
    color: '#FFF',
    marginTop: theme.spacing(5.5),
  },
  actions: {
    float: 'right',
    '& > *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const CookiesBanner = () => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  console.log(document.cookie)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        /* autoHideDuration={6000} */
        ContentProps={{ className: classes.snackBar }}
        onClose={handleClose}
        message={
          <Fragment>
            <Typography variant='subtitle1' component='p'>
              We use cookies on this site. By clicking "Accept All", you agree to the storing of
              cookies on your device to enhance site navigation, analyse site usage, and assist in
              out marketing efforts.
            </Typography>
            <div className={classes.actions}>
              <Button
                color='primary'
                variant='outlined'
                style={{ backgroundColor: 'white' }}
                size='small'
                onClick={handleClose}>
                Accept all
              </Button>
              <Button
                color='primary'
                variant='outlined'
                style={{ backgroundColor: 'white' }}
                size='small'
                onClick={handleClose}>
                Deny
              </Button>
            </div>
          </Fragment>
        }
        /* action={
          <React.Fragment>
            <IconButton size='small' aria-label='close' color='#ffc107' onClick={handleClose}>
              <CloseIcon fontSize='small' />
            </IconButton>
          </React.Fragment>
        } */
      />
    </div>
  );
};
export default CookiesBanner;
