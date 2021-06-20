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
    mainPath: '/about',
    icon: <KeyboardArrowUpIcon />,
    iconClosed: <KeyboardArrowDownIcon />,
    subNav: [
      {
        title: 'About Us',
        path: '/about/#aboutUs',
      },
      {
        title: 'Core Values',
        path: '/about/#core-values',
      },
      {
        title: 'Our Team',
        path: '/about/#team',
      },
      {
        title: 'Our Board',
        path: '/about/#board',
      },
    ],
  },
  {
    title: 'EVENTS',
    mainPath: '/events/all',
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
    title: 'OUR SERVICES',
    mainPath: '/services',
    icon: <KeyboardArrowUpIcon />,
    iconClosed: <KeyboardArrowDownIcon />,
    subNav: [
      {
        title: 'Coaching',
        path: '/services/#coaching',
      },
      {
        title: 'Training',
        path: '/services/#training',
      },
    ],
  },
  {
    title: 'PARTNERS',
    path: '/partners',
    icon: null,
  },

  {
    title: 'COMMUNITY',
    path: '/community',
    icon: null,
  },
  /*  {
    title: 'TALENT POOL',
    path: '/talent-pool',
    icon: null,
  }, */
  {
    title: 'OUR IMPACT',
    path: '/our-impact',
    icon: null,
  },
  {
    title: 'BLOG',
    path: '/blog',
    icon: null,
  },
  {
    title: 'CONTACT US',
    mainPath: '/contact-us',
    icon: <KeyboardArrowUpIcon />,
    iconClosed: <KeyboardArrowDownIcon />,
    subNav: [
      {
        title: 'Get in Touch',
        path: '/contact-us/#getInTouch',
      },
      {
        title: 'FAQ',
        path: '/contact-us/#faq',
      },
    ],
  },
  /*  {
    title: 'CAREER',
    path: '/career',
    icon: null,
  }, */
  {
    title: 'BOOK A VISIT',
    path: '/visit',
    icon: null,
  },
];
