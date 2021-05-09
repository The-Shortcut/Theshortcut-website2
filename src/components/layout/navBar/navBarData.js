import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export const navBarData = [
  {
    title: 'HOME',
    path: '/',
    icon: null,
  },
  {
    title: 'ABOUT',
    path: '/about',
    icon: <KeyboardArrowUpIcon />,
    iconClosed: <KeyboardArrowDownIcon />,
    subNav: [
      {
        title: 'About Us',
        path: '#aboutUs',
      },
      {
        title: 'Success Stories',
        path: '#successStories',
      },
      {
        title: 'FAQ',
        path: '#faq',
      },
    ],
  },
  {
    title: 'EVENTS',
    path: '/events',
    icon: <KeyboardArrowUpIcon />,
    iconClosed: <KeyboardArrowDownIcon />,
    subNav: [
      {
        title: 'All Events',
        path: '/events/all',
      },
      {
        title: 'B.Y.O.B',
        path: '/events/byob',
      },
    ],
  },
  {
    title: 'PARTNERS',
    path: '/for-partners',
    icon: null,
  },
  {
    title: 'BLOG',
    path: '/blog',
    icon: null,
  },
  {
    title: 'CUMMUNITY',
    path: '/community',
    icon: null,
  },
  {
    title: 'TALENT POOL',
    path: '/talent-pool',
    icon: null,
  },
  {
    title: 'OUR IMPACT',
    path: '/our-impact',
    icon: null,
  },
  {
    title: 'CONTACT US',
    path: '/contact-us',
    icon: <KeyboardArrowUpIcon />,
    iconClosed: <KeyboardArrowDownIcon />,
    subNav: [
      {
        title: 'Get in Touch',
        path: '#getInTouch',
      },
      {
        title: 'Our Team',
        path: '#ourTeam',
      },
      {
        title: 'Board',
        path: '#ourBoard',
      },
    ],
  },
  {
    title: 'CAREER',
    path: '/career',
    icon: null,
  },
  {
    title: 'BOOK A VISIT',
    path: '/visit',
    icon: null,
  },
];
