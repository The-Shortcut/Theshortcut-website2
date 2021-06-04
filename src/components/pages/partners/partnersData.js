// ICONS
import { GiSwapBag } from 'react-icons/gi';
import { RiUserStarFill } from 'react-icons/ri';
import { FaAsterisk, FaCogs } from 'react-icons/fa';

// IMAGES
import partner1 from '../../../assets/photos/partner1.jpg';
import partner2 from '../../../assets/photos/partner2.jpeg';
import elyLogo from '../../../assets/logo/partners/ely-logo.png';
import helsinkiLogo from '../../../assets/logo/partners/helsinki-logo.png';
import integration from '../../../assets/photos/integration.jpg';
import entrepreneurshipMindset from '../../../assets/photos/entrepreneurship-mindset.jpeg';
import techTraining from '../../../assets/photos/tech-training.jpg';
import skills from '../../../assets/photos/skills-workshop.jpg';

export const partnersStat = [
  {
    title: '€19 million / year',
    description: 'Unemployment cost of highly skilled immigrants',
    icon: <RiUserStarFill style={{ fontSize: '3rem', color: '#00A99D' }} />,
  },
  {
    title: '€50 million / year',
    description: 'Total cost of international student brain drain',
    icon: <GiSwapBag style={{ fontSize: '3rem', color: '#00A99D' }} />,
  },
  {
    title: '20% at risk of marginalisation',
    description: 'Multicultural youth and the indirect costs of exclusion',
    icon: <FaAsterisk style={{ fontSize: '3rem', color: '#00A99D' }} />,
  },
  {
    title: '53,000 tech experts needed by 2025',
    description: 'Talent gap in tech',
    icon: <FaCogs style={{ fontSize: '3rem', color: '#00A99D' }} />,
  },
];

export const partnersData = [
  {
    name: 'Elikeino-, liikenne- ja ympäristökeskus',
    title: 'ELy keskus',
    logo: elyLogo,
    description:
      'Digitalization Training  program is organized in partnership with Ely-keskus and covers all the important topics and tools that one needs for effective digital marketing. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its lay desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
    photo: partner1,
  },
  {
    name: 'City of Helsinki',
    title: 'helsinki city',
    logo: helsinkiLogo,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
    photo: partner2,
  },
];

export const initiativesData = [
  {
    title: 'Integration',
    description:
      'Do you want to get experience in Events, improve your skills with support, grow your personal and professional network, and take on meaningful work If you answered yes, check out our Events Intern position to join The Shortcut team! We look forward to hearing from you!',
    photo: integration,
  },
  {
    title: 'Entrepreneurship Mindset',
    description:
      'Do you want to get experience in Events, improve your skills with support, grow your personal and professional network, and take on meaningful work If you answered yes, check out our Events Intern position to join The Shortcut team! We look forward to hearing from you!',
    photo: entrepreneurshipMindset,
  },
  {
    title: 'Tech Training',
    description:
      'Do you want to get experience in Events, improve your skills with support, grow your personal and professional network, and take on meaningful work If you answered yes, check out our Events Intern position to join The Shortcut team! We look forward to hearing from you!',
    photo: techTraining,
  },
  {
    title: 'Skills, workshops & Webinars',
    description:
      'Do you want to get experience in Events, improve your skills with support, grow your personal and professional network, and take on meaningful work If you answered yes, check out our Events Intern position to join The Shortcut team! We look forward to hearing from you!',
    photo: skills,
  },
];
