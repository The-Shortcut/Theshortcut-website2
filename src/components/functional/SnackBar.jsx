import React from 'react';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles1 = makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.primary.main,
  },
  error: {
    backgroundColor: theme.palette.error.main,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
  },
  info: {
    backgroundColor: theme.palette.info.main,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  },
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby='client-snackbar'
      message={
        <div id='client-snackbar' className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </div>
      }
      action={[
        <IconButton key='close' aria-label='close' color='inherit' onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}


const SnackBar = ({ open, handleClose, status, msg }) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        // onClose={this.handleClose}
      >
        <MySnackbarContentWrapper onClose={handleClose} variant={status} message={msg} />
      </Snackbar>
    </div>
  );
};
export default SnackBar;
