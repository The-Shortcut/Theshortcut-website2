// Material-UI Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// REACT-ICONS
import { RiUserHeartFill } from 'react-icons/ri';
import { FaCalendarDay, FaUserNinja, FaTransgenderAlt } from 'react-icons/fa';
import { MdDirectionsRun, MdShare } from 'react-icons/md';
import { BsFillFlagFill } from 'react-icons/bs';

export const statData = [
  {
    title: 'Nationalities',
    amount: '132',
    icon: <BsFillFlagFill style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: 'Gender',
    amount: 'F54% & M45%',
    icon: <FaTransgenderAlt style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: 'Entrepreneurs',
    amount: '10%',
    icon: <FaUserNinja style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: 'Want a meaningful life',
    amount: '100%',
    icon: <RiUserHeartFill style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
];

export const sections = [
  {
    title: 'EVENTS',
    icon: <FaCalendarDay color='#00A99D' style={{ fontSize: 55, margin: '24px' }} />,
    text: 'By participating in our Events, you will automatically become a member and know why this diverse community is so rewarding. Head to the Events page to see what you can participate in! Join an Event!',
    target: 'Join an Event!',
    redirect: { path: '/events', name: 'search events' },
  },
  {
    title: 'MEET US',
    icon: <MdDirectionsRun color='#00A99D' style={{ fontSize: 65, margin: '24px' }} />,
    text: 'The Shortcut Lab is a vibrant and active community. These difficult times have forced us to interact in a more digital way. Until the COVID-19 situation improves, our team is available via online meetings. Our goal is to continue to support your career ambitions.',
    target: 'Feel free to book a time with us!',
    redirect: { path: '/meet-us', name: 'book a meeting' },
  },
  {
    title: 'SOCIAL MEDIA',
    icon: <MdShare color='#00A99D' style={{ fontSize: 60, margin: '24px' }} />,
    text: 'Find us on LinkedIn, Facebook, and Instagram where we share news and upcoming events, host conversations, share knowledge and help each other, host online events, and letting you know about useful events around our network.',
    target: 'Join us Online!',
    links: [
      {
        name: 'facebook',
        url: 'https://www.facebook.com/theshortcut/community/',
        icon: <FacebookIcon fontSize='large' color='primary' />,
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/theshortcutorg/',
        icon: <InstagramIcon fontSize='large' color='primary' />,
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/theshortcutorg?lang=en',
        icon: <TwitterIcon fontSize='large' color='primary' />,
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/company/theshortcut/',
        icon: <LinkedInIcon fontSize='large' color='primary' />,
      },
    ],
  },
];
