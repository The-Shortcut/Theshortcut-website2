// PHOTOS
import eventsHero from '../../../assets/photos/eventsHero.jpg';
import careerHero from '../../../assets/photos/careerHero.jpg';
import communityHero from '../../../assets/photos/communityHero.jpg';

//ICONS
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

export const gameData = [
  {
    title: 'See All Events',
    photo: eventsHero,
    path: '/events/all',
    icon: <EventAvailableIcon color='primary' style={{ fontSize: 70, marginTop: 25 }} />,
  },
  {
    title: 'Opportunities',
    photo: careerHero,
    path: '/career',
    icon: <HowToRegIcon color='primary' style={{ fontSize: 70, marginTop: 25 }} />,
  },
  {
    title: 'Join Community',
    photo: communityHero,
    path: '/community',
    icon: <GroupAddIcon color='primary' style={{ fontSize: 70, marginTop: 25 }} />,
  },
];
