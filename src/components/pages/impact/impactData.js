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
    title: 'number of events',
    amount: '205',
    icon: <LocalActivityIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'number of participants',
    amount: '1,969',
    icon: <AssignmentIndIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'number of supporting companies',
    amount: '251',
    icon: <HourglassFullIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'feedback',
    amount: '8.4 / 10',
    icon: <PublicIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'nationalities',
    amount: '102',
    icon: <FlagIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'gender distribution',
    amount: 'F 54% / M 45% / other1%',
    icon: <WcIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'new entrepreneurs',
    amount: '75',
    icon: <GroupAddIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: ' new employments',
    amount: '191',
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
