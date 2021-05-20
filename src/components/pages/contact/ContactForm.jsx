import React, { useState } from 'react';

// Material-UI
import { TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

// Children
import SnackBar from '../../functional/SnackBar';
import { formData } from '../../../helpers/formData';

// Validations
const nameRegex = RegExp(/^[a-zA-Z\s]{3,15}$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const msgRegex = RegExp(/^[a-zA-Z0-9\s.:()#$&*+=-?@""''_]{3,250}$/);

const ContactForm = () => {
  const classes = useStyles();
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState({ name: '', email: '', message: '' });
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
    formData(state);
    let errors = Object.values(error);
    if (!errors.includes(false)) {
      setOpen((prev) => !prev);
    }
    setTimeout(() => {
      setOpen(false);
    }, 5000);
    if (!open) {
      setState({ name: '', email: '', message: '' });
    }
  };

  console.log({ open });
  /* console.log(state, error); */
  return (
    <div>
      <Typography variant='h6'>Get In Touch</Typography>
      <form className={classes.form}>
        <TextField
          label='Your Full Name'
          className={classes.textField}
          type='text'
          name='name'
          value={state.name}
          onChange={handleChange}
          onBlur={handleBlure}
          autoComplete='name'
          margin='normal'
          variant='outlined'
          fullWidth
        />
        {error.name === false && (
          <Typography variant='caption' color='error'>
            between 3 to 15 letters are valid! *
          </Typography>
        )}
        <TextField
          label='Your Email'
          className={classes.textField}
          type='email'
          name='email'
          value={state.email}
          onChange={handleChange}
          onBlur={handleBlure}
          autoComplete='email'
          margin='normal'
          variant='outlined'
          fullWidth
        />
        {error.email === false && (
          <Typography variant='caption' color='error'>
            your email is not valid! *
          </Typography>
        )}
        <TextField
          label='Leave us a Message here'
          multiline
          rows='4'
          name='message'
          value={state.message}
          onChange={handleChange}
          onBlur={handleBlure}
          className={classes.textField}
          margin='normal'
          variant='outlined'
          fullWidth
        />
        {error.message === false && (
          <Typography variant='caption' color='error'>
            between 3 to 250 characters valid!
          </Typography>
        )}
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
          fullWidth
          className={classes.button}>
          SUBMIT
          <SendIcon className={classes.rightIcon} />
          <SnackBar
            open={open}
            handleClose={handleClose}
            status='success'
            msg='Thank you for your message!'
          />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

const useStyles = makeStyles((theme) => ({
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
    marginTop: '15px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '45px',
    },
    padding: theme.spacing(2),
  },
  rightIcon: {
    marginLeft: theme.spacing(4),
  },
}));
