import React, { useState, useEffect } from 'react';

// Material-UI
import {
  Box,
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

// Default Image
import defaultImage from '../../assets/photos/defaultImage.png';

// Share Button
import ShareButton from '../functional/ShareButton';

// Analytics
import analytics from '../functional/analytics';

const SingleEventCard = ({ event }) => {
  const classes = useStyles();
  const [eventID, setEventID] = useState(null);
  let image = event.logo.original ? event.logo.original.url : defaultImage;
  let title = event.name.text;
  let summary = event.summary;
  let availability = event.status;
  let people = event.capacity;
  let link = event.url;

  const exampleCallback = function () {
    console.log('Order complete!');
  };

  useEffect(() => {
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: eventID,
      modal: true,
      modalTriggerElementId: `example-widget-trigger-${eventID}`,
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
    } else if(availability.toLowerCase() === 'application open') {
      return 'APPLY NOW'
    } else {
      return 'REGISTER';
    }
  };

  const handleAnalysis = (targetEvent) => {
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
      <CardMedia style={{ flex: 1, padding: '0.5em' }}>
        <img src={image} alt={title} width='100%' height='100%' style={{ borderRadius: '5px' }} />
      </CardMedia>
      <Box style={{ flex: 1 }}>
        <CardContent className={classes.info}>
          <div
            style={{
              width: '140px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <EventAvailableIcon style={{ marginRight: '5px' }} /> {availability}
          </div>
          <div
            style={{
              width: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flext-start',
            }}>
            <TodayIcon style={{ marginRight: '5px' }} /> {formatDate(event.start.local)}
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
              width: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <AccessTimeIcon style={{ marginRight: '5px' }} /> {formatTime(event)}
          </div>
        </CardContent>
        <Divider />
        <CardContent>
          <Typography variant='h6'>{title}</Typography>
          <br />
          <Typography variant='body1' component='p'>
            {summary}
          </Typography>
        </CardContent>
        <CardActions className={classes.action}>
          <Button
            variant='outlined'
            color='primary'
            size='medium'
            endIcon={<TrendingFlatIcon />}
            href={link}
            id={`example-widget-trigger-${eventID}`}
            onClick={() => handleAnalysis(event)}
            target={availability.toLowerCase() === 'upcoming' ? '_self' : '_blank'}
            rel='noopener noreferrer'>
            {setStatus(event.status)}
          </Button>
          <ShareButton event={event} />
        </CardActions>
      </Box>
    </Card>
  );
};

export default SingleEventCard;

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '90%',
    minWidth: '90%',
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%',
      minWidth: '80%',
    },
    border: '1px solid #DDD',
    borderRadius: '10px',
    boxShadow: ' 0px 0px 22px -5px #434343',
    margin: '2em auto 0',
    display: 'flex',
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
  },
}));
