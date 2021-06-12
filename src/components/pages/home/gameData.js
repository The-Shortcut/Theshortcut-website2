// PHOTOS
import eventsHero from '../../../assets/photos/eventsHero.jpg';
import careerHero from '../../../assets/photos/careerHero.jpg';
import communityHero from '../../../assets/photos/communityHero.jpg';

//ICONS
import { FaCalendarAlt, FaChalkboardTeacher } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { MdPeople } from 'react-icons/md';
/* import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'; */

export const gameData = [
  {
    title: 'All Events',
    photo: eventsHero,
    path: '/events/all',
    icon: <FaCalendarAlt color='#00A99D' style={{ fontSize: 65, marginTop: 25 }} />,
  },
  {
    title: 'Coaching',
    photo: communityHero,
    path: '/coaching',
    icon: <MdPeople color='#00A99D' style={{ fontSize: 70, marginTop: 25 }} />,
  },
  {
    title: 'Community',
    photo: communityHero,
    path: '/community',
    icon: <IoIosPeople color='#00A99D' style={{ fontSize: 70, marginTop: 25 }} />,
  },
  {
    title: 'Training',
    photo: careerHero,
    path: '/training',
    icon: <FaChalkboardTeacher color='#00A99D' style={{ fontSize: 60, marginTop: 25 }} />,
  },
];
