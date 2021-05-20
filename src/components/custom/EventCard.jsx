import React from 'react';

// Material-UI
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TodayIcon from '@material-ui/icons/Today';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import PeopleIcon from '@material-ui/icons/People';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import ShareButton from '../functional/ShareButton';

// Default Image
import defaultImage from '../../assets/photos/defaultImage.png';

const EventCard = ({ event }) => {
  const classes = useStyles();
  let image = event.logo ? event.logo.original.url : defaultImage;
  let title = event.name.text;
  let summary = event.summary;
  let availability = event.status;
  let people = event.capacity;
  let link = event.url;

  const formatDate = (evDate) => {
    let dateArr = evDate.split(/\D/);
    let dateObj = new Date(evDate);
    let monthName = dateObj.toLocaleString('default', { month: 'long' });
    return `${monthName} ${dateArr[2]}, ${dateArr[0]}`;
  };
  const formatTime = (ev) => {
    let startArr = ev.start.local.split(/\D/);
    let endArr = ev.end.local.split(/\D/);
    let startAP = startArr[3] >= 12 ? 'PM' : 'AM';
    let endAP = endArr[3] >= 12 ? 'PM' : 'AM';
    let startH = startArr[3] % 12;
    let endH = endArr[3] % 12;
    return `${startH}:${startArr[4]}${startAP} - ${endH}:${endArr[4]}${endAP}`;
  };
  const setStatus = (status) => {
    if (status.includes('Video')) {
      return 'WATCH NOW';
    } else if (status.includes('completed') || status.includes('canceled')) {
      return 'LEARN MORE';
    } else if (status.includes('Audio')) {
      return 'LISTEN NOW';
    } else {
      return 'REGISTER';
    }
  };
  return (
    <Card className={classes.card}>
      <CardMedia style={{ padding: '5px' }}>
        <img src={image} alt={title} width='100%' height='210px' style={{ borderRadius: '5px' }} />
      </CardMedia>
      <CardContent className={classes.info}>
        <div
          style={{
            width: '110px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <EventAvailableIcon style={{ marginRight: '5px' }} /> {availability}
        </div>
        <div
          style={{
            width: '170px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <TodayIcon style={{ marginRight: '5px' }} />{' '}
          {event.isVideo ? 'always available' : formatDate(event.start.local)}
        </div>
        <div
          style={{
            width: '110px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <PeopleIcon style={{ marginRight: '5px' }} /> {people}
        </div>
        <div
          style={{
            width: '170px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <AccessTimeIcon style={{ marginRight: '5px' }} />{' '}
          {event.isVideo ? event.duration : formatTime(event)}
        </div>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant='h6'>{title}</Typography>
        <br />
        <Typography variant='body2'>{summary}</Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <Button
          variant='outlined'
          color='primary'
          size='medium'
          endIcon={<TrendingFlatIcon />}
          href={link}
          target='_blank'
          rel='noopener noreferrer'>
          {setStatus(event.status)}
        </Button>
        <ShareButton event={event} />
      </CardActions>
    </Card>
  );
};

export default EventCard;

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 335,
    maxWidth: 335,
    minHeight: 600,
    maxHeight: 600,
    border: '1px solid #434343',
    borderRadius: '10px',
    margin: '2em auto',
    [theme.breakpoints.up('md')]: {
      minWidth: 360,
      maxWidth: 360,
      margin: '1em auto',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    width: '100%',
    height: '40%',
  },
  info: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '1fr 1fr',
    rowGap: '5px',
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 0,
  },
}));