// Material-UI Icons
import FlagIcon from '@material-ui/icons/Flag';
import FeedbackIcon from '@material-ui/icons/Feedback';

// REACT-ICONS
import { FaCalendarCheck, FaTransgenderAlt, FaUserNinja } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { MdBusiness } from 'react-icons/md';
import { GiStairsGoal } from 'react-icons/gi';
import { BsPersonBoundingBox, BsBriefcaseFill } from 'react-icons/bs';
import { RiCommunityFill } from 'react-icons/ri';

export const ImpactStatData = [
  {
    title: 'events & activities',
    amount: '205',
    icon: <FaCalendarCheck style={{ fontSize: 35, color: '00A99D' }} />,
  },
  {
    title: 'participants',
    amount: '1,969',
    icon: <HiUserGroup style={{ fontSize: 35, color: '00A99D' }} />,
  },
  {
    title: 'supporting companies',
    amount: '251',
    icon: <MdBusiness style={{ fontSize: 35, color: '00A99D' }} />,
  },
  {
    title: 'feedback',
    amount: '8.4 / 10',
    icon: <FeedbackIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'nationalities',
    amount: '102',
    icon: <FlagIcon style={{ fontSize: 40 }} color='primary' />,
  },
  {
    title: 'gender distribution',
    amount: 'F 54% / M 45% / other1%',
    icon: <FaTransgenderAlt style={{ fontSize: 35, color: '00A99D' }} />,
  },
  {
    title: 'new entrepreneurs',
    amount: '75',
    icon: <FaUserNinja style={{ fontSize: 35, color: '00A99D' }} />,
  },
  {
    title: ' new employments',
    amount: '191',
    icon: <GiStairsGoal style={{ fontSize: 35, color: '00A99D' }} />,
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
    icon: <BsPersonBoundingBox style={{ fontSize: 60, color: '#00A99D' }} />,
  },
  {
    target: 'Business',
    description: [
      'We encourage new startups to emerge and help companies find the talent they need',
      'We increase diversity in the tech community',
      'We contribute to the internationalisation of businesses',
      'We help integrate spouses and families of foreign talents and help get them employed inhigh-growth companies',
    ],
    icon: <BsBriefcaseFill style={{ fontSize: 60, color: '#00A99D' }} />,
  },
  {
    target: 'Society',
    description: [
      'We reverse integration failures',
      'We accelerate employment bringing systemic economic benefits to Finland',
      'We test new models for societal impact',
      'We give back to Finnish society',
    ],
    icon: <RiCommunityFill style={{ fontSize: 60, color: '#00A99D' }} />,
  },
];
