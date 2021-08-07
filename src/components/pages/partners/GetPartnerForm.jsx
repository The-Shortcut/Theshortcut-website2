import React, { useState } from 'react';

// Material-UI
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

// Children
import SnackBar from '../../functional/SnackBar';
import Title from '../../custom/Title';

// Validations
const nameRegex = RegExp(/^[a-zA-Z\s]{3,25}$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const msgRegex = RegExp(/^[a-zA-Z0-9\s.:()#$&*+=-?@""''_]{3,250}$/);

const GetPartnerForm = ({ intRef }) => {
  const classes = useStyles();
  const [state, setState] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [error, setError] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleBlure = (e) => {
    const { name, value } = e.target;
    let formErr = { ...error };
    switch (name) {
      case 'name':
        formErr.name = nameRegex.test(value);
        break;
      case 'email':
        formErr.email = emailRegex.test(value);
        break;
      case 'message':
        formErr.message = msgRegex.test(value);
        break;
      default:
        break;
    }
    setError(formErr);
  };

  const handleClose = (event, reason) => {
    console.log(reason);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = Object.values(error);
    if (!errors.includes(false)) {
      setOpen((prev) => !prev);
    }
    setTimeout(() => {
      setOpen(false);
    }, 5000);
    if (!open) {
      setState({ name: '', company: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div ref={intRef} className={classes.root}>
      <Title>Interested in partnering with us ?</Title>
      <Grid container spacing={3} className={classes.form}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label='Full Name'
            className={classes.textField}
            type='text'
            name='name'
            value={state.name}
            onChange={handleChange}
            onBlur={handleBlure}
            autoComplete='name'
            margin='dense'
            variant='outlined'
          />
          {error.name === false && (
            <Typography variant='caption' color='error' style={{ margin: '-1em 0 0 1em' }}>
              between 3 to 15 letters are valid! *
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label='Email'
            className={classes.textField}
            type='email'
            name='email'
            value={state.email}
            onChange={handleChange}
            onBlur={handleBlure}
            autoComplete='email'
            margin='dense'
            variant='outlined'
          />
          {error.email === false && (
            <Typography variant='caption' color='error'>
              your email is not valid! *
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label='Company'
            className={classes.textField}
            type='company'
            name='company'
            value={state.company}
            onChange={handleChange}
            onBlur={handleBlure}
            autoComplete='company'
            margin='dense'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Phone'
            className={classes.textField}
            type='phone'
            name='phone'
            value={state.phone}
            onChange={handleChange}
            onBlur={handleBlure}
            autoComplete='phone'
            margin='dense'
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Message'
            multiline
            rows='4'
            name='message'
            value={state.message}
            onChange={handleChange}
            onBlur={handleBlure}
            className={classes.textField}
            margin='dense'
            variant='outlined'
            fullWidth
          />
          {error.message === false && (
            <Typography variant='caption' color='error'>
              between 3 to 250 characters valid!
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            type='submit'
            value='Send'
            onClick={handleSubmit}
            disabled={
              !error.name ||
              !error.email ||
              !error.message ||
              state.name === '' ||
              state.email === '' ||
              state.message === ''
            }
            variant='contained'
            color='primary'
            className={classes.button}>
            SUBMIT
            <SendIcon className={classes.rightIcon} />
            <SnackBar
              open={open}
              handleClose={handleClose}
              status='success'
              msg='Thank you for your message! Will come back to you soon'
            />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default GetPartnerForm;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '60%',
    margin: '7em auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
  },
  form: {
    marginRight: '3em',
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto 2em',
    },
  },
  input: {
    fontSize: '1.5rem',
  },
  button: {
    color: '#FFFFFF',
    minWidth: '12em',
  },
  rightIcon: {
    marginLeft: theme.spacing(4),
  },
}));
