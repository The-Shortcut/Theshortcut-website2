import React from 'react';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Divider } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const SkeletonEvent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Skeleton animation='wave' variant='rect' width='100%' height={160} />
      <CardContent className={classes.info}>
        <div
          style={{
            width: '110px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Skeleton
            animation='wave'
            variant='circle'
            width={30}
            height={30}
            style={{ marginRight: '5px' }}
          />
          <Skeleton animation='wave' width={40} height={20} style={{ marginRight: '5px' }} />
        </div>
        <div
          style={{
            width: '170px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Skeleton
            animation='wave'
            variant='circle'
            width={30}
            height={30}
            style={{ marginRight: '5px' }}
          />
          <Skeleton animation='wave' width={40} height={20} style={{ marginRight: '5px' }} />
        </div>
        <div
          style={{
            width: '110px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Skeleton
            animation='wave'
            variant='circle'
            width={30}
            height={30}
            style={{ marginRight: '5px' }}
          />
          <Skeleton animation='wave' width={40} height={20} style={{ marginRight: '5px' }} />
        </div>
        <div
          style={{
            width: '170px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Skeleton
            animation='wave'
            variant='circle'
            width={30}
            height={30}
            style={{ marginRight: '5px' }}
          />
          <Skeleton animation='wave' width={40} height={20} style={{ marginRight: '5px' }} />
        </div>
      </CardContent>
      <Divider />
      <CardContent>
        <Skeleton animation='wave' height={30} width='90%' />
        <Skeleton animation='wave' height={30} width='90%' />
        <br />
        <Skeleton animation='wave' height={10} width='80%' />
        <Skeleton animation='wave' height={10} width='80%' />
        <Skeleton animation='wave' height={10} width='80%' />
      </CardContent>
      <CardActions className={classes.action}>
        <Skeleton animation='wave' height={50} width='30%' />
        <Skeleton
          animation='wave'
          variant='circle'
          width={40}
          height={40}
          style={{ marginRight: '5px' }}
        />
      </CardActions>
    </Card>
  );
};

export default SkeletonEvent;

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 600,
    maxHeight: 600,
    border: '1px solid #ddd',
    borderRadius: '10px',
    margin: '2em auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      minHeight: 660,
    },
  },
  info: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '1fr 1fr',
    rowGap: '10px',
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 0,
  },
}));
