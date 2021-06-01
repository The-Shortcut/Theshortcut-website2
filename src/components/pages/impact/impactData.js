// Material-UI Icons
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import PublicIcon from '@material-ui/icons/Public';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FlagIcon from '@material-ui/icons/Flag';
import WcIcon from '@material-ui/icons/Wc';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

import GroupIcon from '@material-ui/icons/Group';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';

export const ImpactStatData = [
  {
    title: 'evetns & activity',
    amount: '220',
    icon: <LocalActivityIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'programs, participants',
    amount: '5,376',
    icon: <AssignmentIndIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'hours of impact',
    amount: '33,871',
    icon: <HourglassFullIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'online reach',
    amount: '252K',
    icon: <PublicIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'community growth',
    amount: '59%',
    icon: <GroupAddIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'nationalities',
    amount: '102',
    icon: <FlagIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'F / M',
    amount: '53% / 47%',
    icon: <WcIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'get career opportunities',
    amount: '72%',
    icon: <BusinessCenterIcon style={{ fontSize: 40 }} color='primary' />,
  },
];

// ICONS

export const impactGoals = [
  {
    target: 'Individual',
    description: [
      'We build opportunities for employment and mobility in the tech community',
      'We activate new entrepreneurs with a can-do attitude to build confidence and adopt a high-growth mindset',
      'We activate untapped potential and optimise under-utilised skills',
      'We enable people to find a sense of belonging and empowerment',
    ],
    icon: <HowToRegIcon style={{ fontSize: 60 }} color='primary' />,
  },
  {
    target: 'Business',
    description: [
      'We encourage new startups to emerge and help companies find the talent they need',
      'We increase diversity in the tech community',
      'We contribute to the internationalisation of businesses',
      'We help integrate spouses and families of foreign talents and help get them employed inhigh-growth companies',
    ],
    icon: <MovieFilterIcon style={{ fontSize: 60 }} color='primary' />,
  },
  {
    target: 'Society',
    description: [
      'We reverse integration failures',
      'We accelerate employment bringing systemic economic benefits to Finland',
      'We test new models for societal impact',
      'We give back to Finnish society',
    ],
    icon: <GroupIcon style={{ fontSize: 60 }} color='primary' />,
  },
];
