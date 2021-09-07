import React from 'react';

// DATA
import { resources } from './statData';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActionArea, Typography, Link } from '@material-ui/core';

// Children
import Title from '../../custom/Title';

const Resources = ({ resourcesRef }) => {
  const classes = useStyles();
  console.log(resources);
  return (
    <div className={classes.root} ref={resourcesRef}>
      <Title>Additional Resources from our Partner Network</Title>
      {resources.map((res, index) => (
        <Card key={index} className={classes.card}>
          <CardActionArea>
            <Link
              href={res.link}
              underline='hover'
              target='_blank'
              rel='noreferrer'
              color='inherit'>
              <CardContent className={classes.content}>
                {res.icon}{' '}
                <Typography variant='body1' style={{ marginLeft: 15 }}>
                  {res.value}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Resources;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '7em auto',
    [theme.breakpoints.down('sm')]: {
      margin: '5em auto 2em',
    },
  },
  card: {
    margin: '1em auto',
    maxWidth: '60%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '80%',
      maxWidth: '80%',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));
