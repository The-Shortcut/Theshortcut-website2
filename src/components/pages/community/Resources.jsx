import React, { useEffect } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActionArea, Typography, Link } from '@material-ui/core';
import { MdEventAvailable } from 'react-icons/md';

// Children
import Title from '../../custom/Title';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getResourcesData } from '../../../actions/resourceActions';

const Resources = ({ resourcesRef }) => {
  const classes = useStyles();
  const { isLoading, resources } = useSelector((state) => state.resources);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading) {
      dispatch(getResourcesData());
    }
  }, [dispatch, isLoading]);

  return (
    <div className={classes.root} ref={resourcesRef} id='resources'>
      <Title>Additional Resources from our Partner Network</Title>
      {resources?.map(({ acf }, index) => (
        <Card key={index} className={classes.card}>
          <CardActionArea>
            <Link
              href={acf.link}
              underline='hover'
              target='_blank'
              rel='noreferrer'
              color='inherit'>
              <CardContent className={classes.content}>
                <MdEventAvailable color='#00A99D' style={{ fontSize: 40 }} />
                <Typography variant='body1' style={{ marginLeft: 15 }}>
                  {acf.value}
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
