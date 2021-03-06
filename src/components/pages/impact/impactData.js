// Material-UI Icons
import FeedbackIcon from '@material-ui/icons/Feedback';

// REACT-ICONS
import { FaCalendarCheck, FaTransgenderAlt, FaUserNinja } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { MdBusiness } from 'react-icons/md';
import { GiStairsGoal } from 'react-icons/gi';
import { BsPersonBoundingBox, BsBriefcaseFill, BsFillFlagFill } from 'react-icons/bs';
import { RiCommunityFill } from 'react-icons/ri';

export const ImpactStatData = [
  {
    title: 'Nationalities',
    amount: '132',
    icon: <BsFillFlagFill style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: 'Participants',
    amount: '6,027',
    icon: <HiUserGroup style={{ fontSize: 35, color: '#FFFFFF' }} />,
  },
  {
    title: 'Events & Training',
    amount: '260',
    icon: <FaCalendarCheck style={{ fontSize: 35, color: '#FFFFFF' }} />,
  },
  {
    title: 'Feedback',
    amount: '8.4/10',
    icon: <FeedbackIcon style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: 'Entrepreneurs',
    amount: '75',
    icon: <FaUserNinja style={{ fontSize: 35, color: '#FFFFFF' }} />,
  },
  {
    title: 'Employments',
    amount: '191',
    icon: <GiStairsGoal style={{ fontSize: 35, color: '#FFFFFF' }} />,
  },
  {
    title: 'Partners',
    amount: '251',
    icon: <MdBusiness style={{ fontSize: 35, color: '#FFFFFF' }} />,
  },
  {
    title: 'Gender Distribution',
    amount: 'F54% & M45%',
    icon: <FaTransgenderAlt style={{ fontSize: 35, color: '#FFFFFF' }} />,
  },
  
];

// ICONS

export const impactGoals = [
  {
    target: 'INDIVIDUAL',
    description: [
      'We enable people to find a sense of professional belonging and empowerment ',
      'We activate untapped potential and optimize under-utilized skills',
      'We support new entrepreneurs with a can-do attitude to build confidence and adopt a high-growth mindset',
    ],
    icon: <BsPersonBoundingBox style={{ fontSize: 60, color: '#00A99D' }} />,
  },
  {
    target: 'BUSINESS',
    description: [
      'We help companies access new markets through diversity',
      'We leverage and promote diversity to help companies improve company results',
      'We upskill and re-skill talent to meet the changing needs of modern business',
    ],
    icon: <BsBriefcaseFill style={{ fontSize: 60, color: '#00A99D' }} />,
  },
  {
    target: 'SOCIETY',
    description: [
      'We leverage untapped talent potential to minimize labour shortages and help modernize the workforce',
      'We lower unemployment payouts while creating more taxpayers',
      'We work to improve structural and bureaucratic inefficiencies in immigration and integration',
    ],
    icon: <RiCommunityFill style={{ fontSize: 60, color: '#00A99D' }} />,
  },
];
