import React, { useEffect } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Box, Typography, Divider } from '@material-ui/core';

// ICONS
import { SiSemanticweb } from 'react-icons/si';
import { AiFillCheckCircle } from 'react-icons/ai';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getCodeOfConduct } from '../../../actions/docActions';

const CodeOfConduct = () => {
  const classes = useStyles();
  const { codesLoaded, codeTopic, codeOfConduct } = useSelector((state) => state.docs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCodeOfConduct());
  }, [dispatch]);

  if (!codesLoaded) {
    return (
      <div className={classes.spinner}>
        <CircularProgress size={60} />
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <SiSemanticweb style={{ fontSize: '5rem', marginRight: 20 }} />
        <Typography variant='h1'>{codeTopic.title.rendered}</Typography>
      </div>
          <div className={classes.container}>
          <Typography
          variant='subtitle1'
          component='p'
          dangerouslySetInnerHTML={{ __html: codeTopic.content.rendered }}
        />
        {codeOfConduct &&
          codeOfConduct.map((policy, index) => (
            <Box key={index}>
              <Divider />
              <div className={classes.title}>
                <AiFillCheckCircle style={{ fontSize: '1.5rem', marginRight: 10 }} />
                <Typography variant='h6'>{policy.title.rendered}</Typography>
              </div>
              <Typography
                variant='subtitle1'
                component='p'
                dangerouslySetInnerHTML={{ __html: policy.content.rendered }}
              />
            </Box>
          ))}
      </div>
    </div>
  );
};

export default CodeOfConduct;

const useStyles = makeStyles((theme) => ({
  spinner: {
    minWidth: '100vw',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    minWidth: '70%',
    maxWidth: '70%',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
  },
  text: {
    textAlign: 'center',
    margin: '3em auto',
    fontSize: '1.1rem',
  },
  banner: {
    minWidth: '100%',
    minHeight: '20em',
    maxHeight: '20em',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 25,
    display: 'flex',
    alignItems: 'center',
  },
}));
