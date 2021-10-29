import React, { useState, useEffect } from 'react';

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

// Analytics
import analytics from '../functional/analytics';

const EventCard = ({ event }) => {
  const classes = useStyles();
  const [eventID, setEventID] = useState(null);
  let image = event.logo ? event.logo.original.url : defaultImage;
  let title = event.name.text;
  let summary = event.summary;
  let availability = event.status;
  let people = event.capacity;
  let link = event.url;
  /*   console.log(eventID); */

  const exampleCallback = () => {
    console.log('Order complete!');
  };

  useEffect(() => {
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: eventID,
      modal: true,
      modalTriggerElementId: `example-widget-trigger`,
      onOrderComplete: exampleCallback,
    });
  }, [eventID]);

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
    if (status.toLowerCase().includes('video')) {
      return 'WATCH NOW';
    } else if (
      status.toLowerCase().includes('completed') ||
      status.toLowerCase().includes('canceled')
    ) {
      return 'LEARN MORE';
    } else if (status.toLowerCase().includes('audio')) {
      return 'LISTEN NOW';
    } else if (availability.toLowerCase() === 'upcoming') {
      return 'REGISTER';
    } else if (availability.toLowerCase() === 'application open') {
      return 'APPLY NOW';
    } else {
      return 'REGISTER';
    }
  };

  const handleAnalysis = (targetEvent) => {
    console.log(targetEvent);
    if (targetEvent.id) {
      setEventID(targetEvent.id);
    }
    analytics.sendEvent({
      category: 'Select Event',
      action: targetEvent.status,
      label: targetEvent.name.text,
      value: 1,
    });
  };
  return (
    <Card className={classes.card}>
      <CardMedia
        component='img'
        height='220'
        className={classes.media}
        image={image}
        title={title}
      />
      <div className={classes.info}>
        <div className={classes.infoItem}>
          <EventAvailableIcon style={{ marginRight: '5px' }} /> {availability}
        </div>
        <div className={classes.infoItem}>
          <TodayIcon style={{ marginRight: '5px' }} />{' '}
          {event.isVideo ? 'always available' : formatDate(event.start.local)}
        </div>
        <div className={classes.infoItem}>
          <PeopleIcon style={{ marginRight: '5px' }} /> {people}
        </div>
        <div className={classes.infoItem}>
          <AccessTimeIcon style={{ marginRight: '5px' }} />{' '}
          {event.isVideo ? event.duration : formatTime(event)}
        </div>
      </div>
      <Divider />
      <CardContent>
        <Typography variant='h6' className={classes.title}>{title}</Typography>
        <br />
        <Typography variant='subtitle1' component='p' className={classes.summary}>
          {summary}
        </Typography>
        {/* <Link to={{ pathname: `/events/all/${event.id}`, state: { data: event } }}>event page</Link> */}
      </CardContent>
      <CardActions className={classes.action}>
        <Button
          variant='outlined'
          color='primary'
          size='medium'
          endIcon={<TrendingFlatIcon />}
          href={link}
          id={`example-widget-trigger`}
          onClick={() => handleAnalysis(event)}>
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
    maxWidth: 420,
    minHeight: 550,
    maxHeight: 550,
    background: '#F9F9F9',
    border: '1px solid #434343',
    borderRadius: '10px',
    margin: '1em auto',
   /*  [theme.breakpoints.down('sm')]: {
      minHeight: 660,
      marginBottom: 0,
    }, */
    display: 'block',
    position:'relative',
  },
  media: {
    objectFit: 'fill',
    minHeight: '220px',
  },
  info: {
    margin: '10px 5px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '1fr 1fr',
    rowGap: '5px',
  },
  infoItem: (props) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }),
  title: {
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 2,
    wordBreak: 'break-all',
    overflow: 'hidden',
  },
  summary: {
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 3,
    wordBreak: 'break-all',
    overflow: 'hidden',
  },
  action: {
    position:'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: 0,
    minWidth: '100%',
  },
}));
