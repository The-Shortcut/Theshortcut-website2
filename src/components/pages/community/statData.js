// Material-UI Icons
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EventIcon from '@material-ui/icons/Event';
import MmsIcon from '@material-ui/icons/Mms';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// Images
import events from '../../../assets/illustrations/21.png';
import visitUs from '../../../assets/illustrations/search.png';
import socialMedia from '../../../assets/illustrations/4.png';

export const statData = [
  {
    title: 'members',
    amount: '2,240',
    icon: (
      <PeopleAltIcon
        color={window.innerWidth < 600 ? 'primary' : 'secondary'}
        style={{ fontSize: 40 }}
      />
    ),
  },
  {
    title: 'events',
    amount: '225',
    icon: (
      <EventIcon
        color={window.innerWidth < 600 ? 'primary' : 'secondary'}
        style={{ fontSize: 40 }}
      />
    ),
  },
  {
    title: 'posts',
    amount: '1,250',
    icon: (
      <MmsIcon color={window.innerWidth < 600 ? 'primary' : 'secondary'} style={{ fontSize: 40 }} />
    ),
  },
  {
    title: 'likes',
    amount: '17,823,244',
    icon: (
      <ThumbUpIcon
        color={window.innerWidth < 600 ? 'primary' : 'secondary'}
        style={{ fontSize: 40 }}
      />
    ),
  },
];

export const sections = [
  {
    title: 'EVENTS',
    image: events,
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. ',
    redirect: { path: '/events/all', name: 'search events' },
  },
  {
    title: 'VISIT US',
    image: visitUs,
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. ',
    redirect: { path: '/visit', name: 'book a visit' },
  },
  {
    title: 'SOCIAL MEDIA',
    image: socialMedia,
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. ',
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
