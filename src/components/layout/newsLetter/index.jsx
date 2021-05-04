import React, { useState } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, FormHelperText, Typography, Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FollowMedia = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);

  const emailRegex = RegExp(/^\w+([-\.]?\w+)\.*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailErr(!emailRegex.test(email));
  };
  /* console.log(email, emailErr); */
  return (
    <div className={classes.div}>
      <form className={classes.form}>
        <div>
          <TextField
            label='What is your email address ?'
            className={classes.textField}
            type='email'
            name='email'
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            autoComplete='email'
            variant='outlined'
          />
          {emailErr ? (
            <Typography variant='subtitle2' color='error' id='email'>
              Your email is not valid!
            </Typography>
          ) : (
            <Typography variant='subtitle2' color='inherit' id='email'>
              We'll never share your email.
            </Typography>
          )}
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
        </Button>
      </form>
      <div className={classes.mediaIcons}>
        <Typography>Follow us</Typography>
        <div className={classes.icons}>
          <FacebookIcon style={{ fontSize: '30px' }} />
          <InstagramIcon style={{ fontSize: '30px' }} />
          <TwitterIcon style={{ fontSize: '30px' }} />
          <LinkedInIcon style={{ fontSize: '30px' }} />
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
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  form: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  textField: {
    minWidth: '35em',
    [`& fieldset`]: {
      borderRadius: '4px 0 0 4px',
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '18em',
    },
  },
  submitBtn: {
    minHeight: '3.99em',
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
}));
