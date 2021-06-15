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
    amount: 'F54/M45/other1%',
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
      'We enable people to find a sense of professional belonging and empowerment ',
      'We activate untapped potential and optimize under-utilized skills',
      'We support new entrepreneurs with a can-do attitude to build confidence and adopt a high-growth mindset',
    ],
    icon: <BsPersonBoundingBox style={{ fontSize: 60, color: '#00A99D' }} />,
  },
  {
    target: 'Business',
    description: [
      'We help companies access new markets through diversity',
      'We leverage and promote diversity to help companies improve company results',
      'We upskill and re-skill talent to meet the changing needs of modern business',
    ],
    icon: <BsBriefcaseFill style={{ fontSize: 60, color: '#00A99D' }} />,
  },
  {
    target: 'Society',
    description: [
      'We leverage untapped talent potential to minimize labour shortages and help modernize the workforce',
      'We lower unemployment payouts while creating more taxpayers',
      'We work towards improving the structural and bureaucratic inefficiencies in the immigration and integration frameworks',
    ],
    icon: <RiCommunityFill style={{ fontSize: 60, color: '#00A99D' }} />,
  },
];