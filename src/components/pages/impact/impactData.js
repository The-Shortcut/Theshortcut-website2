// Material-UI Icons
import FeedbackIcon from '@material-ui/icons/Feedback';

// REACT-ICONS
import { FaCalendarCheck, FaTransgenderAlt, FaUsersCog } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { MdSchool, MdCake } from 'react-icons/md';
import { GiStairsGoal, GiShakingHands } from 'react-icons/gi';
import { BsPersonBoundingBox, BsBriefcaseFill, BsFillFlagFill } from 'react-icons/bs';
import { RiCommunityFill } from 'react-icons/ri';
import { IoIosPaper } from 'react-icons/io';

export const ImpactStatData = [
  {
    title: 'Nationalities',
    amount: '132',
    icon: <BsFillFlagFill style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: 'Participants',
    amount: '7,857',
    icon: <HiUserGroup style={{ fontSize: 35, color: '#FFFFFF' }} />,
  },
  {
    title: 'Highly Educated',
    amount: '90%',
    icon: <MdSchool style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: 'Feedback',
    amount: '8.4/10',
    icon: <FeedbackIcon style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: 'Entrepreneurs',
    amount: '87',
    icon: <IoIosPaper style={{ fontSize: 35, color: '#FFFFFF' }} />,
  },
  {
    title: 'Employments',
    amount: '263',
    icon: <GiShakingHands style={{ fontSize: 35, color: '#FFFFFF' }} />,
  },
  {
    title: 'Under the age of 35',
    amount: '71%',
    icon: <MdCake style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: 'Gender Distribution',
    amount: '54% F & 45% M',
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
