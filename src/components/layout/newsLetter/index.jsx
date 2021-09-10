import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// Snackbar
import SnackBar from '../../functional/SnackBar';

const FollowMedia = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ state: false, msg: '' });
  const [added, setAdded] = useState({ status: false, email: null });

  const API_TOKEN = `${process.env.REACT_APP_SEND_IN_BLUE_TOKEN}`;

  const emailRegex = RegExp(/^\w+([-.]?\w+)\.*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addToList = async (emailID) => {
    let addToListConfig = {
      method: 'post',
      url: 'https://api.sendinblue.com/v3/smtp/email',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_TOKEN,
      },
      data: JSON.stringify({
        sender: {
          name: 'The Shortcut',
          email: 'theshortcut@theshortcut.org',
        },
        to: [{ email: emailID }],
        templateId: 17,
      }),
    };
    try {
      const listRes = await axios(addToListConfig);

      setAlert({ state: 'info', msg: 'Your will recieve welcome email!' });
      setTimeout(() => {
        setOpen(false);
      }, 5000);
      return listRes;
    } catch (error) {
      setOpen((prev) => !prev);
      setAlert({ state: 'error', msg: 'Something wrong, try again!' });
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    }
  };
  useEffect(() => {
    setEmailErr(!emailRegex.test(email));
    if (added.status) {
      addToList(added.email);
      setAdded({ status: false, email: '' });
    }
  }, [addToList, added, email, emailRegex]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let config = {
      method: 'post',
      url: 'https://api.sendinblue.com/v3/contacts',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_TOKEN,
      },
      data: JSON.stringify({ email: email }),
    };

    console.log(emailErr);
    if (emailErr) {
      setOpen((prev) => !prev);
      setAlert({ state: 'error', msg: 'Please enter valid email ID!' });
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    } else {
      try {
        const res = await axios(config);
        console.log(res);
        setOpen((prev) => !prev);
        setAlert({ state: 'success', msg: 'Your email is added!' });
        setTimeout(() => {
          setOpen(false);
        }, 5000);
        if (!open) {
          setAdded({ status: true, email: email });
          setEmail('');
        }
        return res;
      } catch (error) {
        console.log(error);
        setOpen((prev) => !prev);
        setAlert({ state: 'warning', msg: 'This email ID is already exist, try another one!' });
        setTimeout(() => {
          setOpen(false);
        }, 5000);
      }
    }
  };
  const handleClose = (event, reason) => {
    console.log(reason);
  };

  return (
    <div className={classes.div} style={window.location.pathname === '/start-here' ? {display:'none'} : {display: 'flex'}}>
      <form className={classes.form}>
        <div className={classes.inputSection}>
          <TextField
            label='Your email address ?'
            className={classes.textField}
            /* inputProps={{ style: { fontSize: '1.2rem' } }} */
            type='email'
            name='email'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            autoComplete='email'
            variant='outlined'
            fullWidth
            helperText='Join our monthly newsletter to get exclusive offers and information on what’s happening
            at The Shortcut.'
          />
        </div>
        <Button
          type='submit'
          color='primary'
          className={classes.submitBtn}
          value='Subscribe'
          variant='contained'
          disableElevation={true}
          onClick={handleSubmit}>
          Subscribe
          <SnackBar open={open} handleClose={handleClose} status={alert.state} msg={alert.msg} />
        </Button>
      </form>
      <div className={classes.mediaIcons}>
        <Typography>Follow us</Typography>
        <div className={classes.icons}>
          <Link
            component='a'
            color='secondary'
            href='https://www.facebook.com/theshortcut/community/'
            target='_blank'
            rel='noopener noreferrer'>
            <FacebookIcon className={classes.icon} />
          </Link>
          <Link
            component='a'
            color='secondary'
            href='https://www.instagram.com/theshortcutorg/'
            target='_blank'
            rel='noopener noreferrer'>
            <InstagramIcon className={classes.icon} />
          </Link>
          <Link
            component='a'
            color='secondary'
            href='https://twitter.com/theshortcutorg?lang=en'
            target='_blank'
            rel='noopener noreferrer'>
            <TwitterIcon className={classes.icon} />
          </Link>
          <Link
            component='a'
            color='secondary'
            href='https://www.linkedin.com/company/theshortcut/'
            target='_blank'
            rel='noopener noreferrer'>
            <LinkedInIcon className={classes.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowMedia;

const useStyles = makeStyles((theme) => ({
  div: {
    maxWidth: '100%',
    backgroundColor: '#DDDDDD',
    margin: '4em auto 0',
    padding: '3em 0 1em',
    display: 'flex',
    /* flexWrap: 'wrap', */
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  form: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  },
  textField: {
    minWidth: '35em',
    [`& fieldset`]: {
      borderRadius: '4px 0 0 4px',
    },
    [theme.breakpoints.only('sm')]: {
      minWidth: '29.5em',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '16em',
    },
  },
  inputSection: {
    flexBasis: '60%',
  },
  submitBtn: {
    flexBasis: '15%',
    [theme.breakpoints.down('xs')]: {
      flexBasis: '24%',
    },
    minHeight: '4.3em',
    color: '#fff',
    borderRadius: '0 4px 4px 0',
  },
  mediaIcons: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '1.5em',
    },
  },
  icons: {
    minWidth: '180px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 30,
    transition: 'transform 0.5s',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'scale(1.5)',
    },
  },
}));
