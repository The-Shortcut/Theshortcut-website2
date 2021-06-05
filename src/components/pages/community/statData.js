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
    text: 'By participating in our Events, you will become a member and experience why becoming a member of this diverse community is so rewarding. Head over to the Events Page to see what is happening now that you can participate in to become an instant member! Join an Event!',
    redirect: { path: '/events/all', name: 'search events' },
  },
  {
    title: 'VISIT US',
    image: visitUs,
    text: 'The Shortcut Lab, as well as our online community, is a bustling physical space where we, and others, host events, have reservable working rooms, and where you can meet like-minded people from the community. Join us in The Shortcut Lab!',
    redirect: { path: '/visit', name: 'book a visit' },
  },
  {
    title: 'SOCIAL MEDIA',
    image: socialMedia,
    text: 'We have active channels on LinkedIn, Facebook, and Instagram where we share news and upcoming events, host conversations, share knowledge and help each other, host online events, as well as letting you know about useful events around our network. Join us Online!',
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
