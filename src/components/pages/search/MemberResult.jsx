import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const MemberResult = ({ member, route, page, section }) => {
  const classes = useStyles();
  return (
    <Box className={classes.item}>
      <a href={route} className={classes.link}>
        <span className={classes.span}>PAGE:</span> {page}
        <br /> <span className={classes.span}>SECTION:</span> {section}
      </a>
      <div>
        <Typography variant='subtitle2'>
          <span className={classes.span}>Name:</span> {member.name}
        </Typography>
        <Typography variant='subtitle2'>
          <span className={classes.span}>Position:</span> {member.position}
        </Typography>
      </div>
    </Box>
  );
};

export default MemberResult;

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    border: '2px solid #eee',
    borderRadius: '20px',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  img: {
    maxWidth: '60px',
    objectFit: 'cover',
  },
  span: {
    fontWeight: 'bold',
  },
  link: {
    minWidth: '160px',
    maxHeight: '90px',
    background: '#00A99D',
    color: '#FFFFFF',
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));
