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
/*     path: '/about', */
    icon: <KeyboardArrowUpIcon />,
    iconClosed: <KeyboardArrowDownIcon />,
    subNav: [
      {
        title: 'About Us',
        path: '/about/#aboutUs',
      },
      {
        title: 'Success Stories',
        path: '/about/#successStories',
      },
      {
        title: 'FAQ',
        path: '/about/#faq',
      },
    ],
  },
  {
    title: 'EVENTS',
    /*     path: null, */
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
    title: 'COMMUNITY',
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
    /* path: '/contact-us', */
    icon: <KeyboardArrowUpIcon />,
    iconClosed: <KeyboardArrowDownIcon />,
    subNav: [
      {
        title: 'Get in Touch',
        path: '/contact-us/#getInTouch',
      },
      {
        title: 'Our Team',
        path: '/contact-us/#ourTeam',
      },
      {
        title: 'Board',
        path: '/contact-us/#ourBoard',
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
