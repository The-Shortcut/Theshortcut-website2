/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

let API_TOKEN = process.env.REACT_APP_EVENT_API_TOKEN;

const formatDate = (date, time) => {
  let dateArr = date.split(/\D/);
  let result = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}T${time}`;
  return result;
};

const getEvents = async () => {
  let pageOne = `https://www.eventbriteapi.com/v3/organizations/171778300477/events/?order_by=start_desc&page=1&token=${API_TOKEN}`;
  let pageTwo = `https://www.eventbriteapi.com/v3/organizations/171778300477/events/?order_by=start_desc&page=2&token=${API_TOKEN}`;
  let pageThree = `https://www.eventbriteapi.com/v3/organizations/171778300477/events/?order_by=start_desc&page=3&token=${API_TOKEN}`;

  const reqOne = await axios.get(pageOne);
  const reqTwo = await axios.get(pageTwo);
  const reqThree = await axios.get(pageThree);
  const totalEvents = await axios.all([reqOne, reqTwo, reqThree]).then(axios.spread((...responses) => {
    return responses.flatMap(res => res.data.events);
  })).catch(err => console.error(err));

  const draftsResponse = await axios.get(
    `https://www.eventbriteapi.com/v3/organizations/171778300477/events/?order_by=start_desc&status=draft&token=${API_TOKEN}`
  );
  const response = totalEvents.filter(
    (event) => !draftsResponse.data.events.find(({ id }) => event.id === id)
  );
  response.forEach((event) =>
    event.status === 'live' ? Object.assign(event, { status: 'upcoming' }) : event.status
  );

  const eventsByCMS = await axios.get('https://theshortcut.org/wp-json/wp/v2/events/?per_page=100');
  let data = eventsByCMS.data.map((data) => data.acf);
  let modifiedData = [];
  data.forEach((item) => {
    let dataObj = {
      name: { text: item.title },
      start: { local: formatDate(item.date_start, item.time_start) },
      end: { local: formatDate(item.date_end, item.time_end) },
      summary: item.description,
      logo: { original: { url: item.image.url } },
      venue: item.venue,
      url: item.url,
      status: item.status,
      online_event: item.online_event,
      isVideo: item.video,
      duration: item.duration
    };
    return modifiedData.push(dataObj);
  });
  const allEvents = [...modifiedData, ...response].sort((a, b) =>
    new Date(a.start.local).getTime() < new Date(b.start.local).getTime() ? 1 : -1
  );
  return allEvents;
};

export default {
  getEvents,
};
