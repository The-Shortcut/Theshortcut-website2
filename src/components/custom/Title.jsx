import React from 'react';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const Title = ({ children }) => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant='h3' className={classes.text}>
        {children}
      </Typography>
    </Box>
  );
};

export default Title;

const useStyles = makeStyles((theme) => ({
  text: {
    margin: '30px auto',
    [theme.breakpoints.down('md')]: {
      margin: '20px auto',
    },
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle:'italic',
    inlineSize: 'min-content',
    borderBottom: '5px solid #00A99D',
    whiteSpace: 'nowrap',
  },
}));
