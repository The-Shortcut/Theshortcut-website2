// ICONS
import { GiPayMoney, GiWantedReward, GiCoins } from 'react-icons/gi';
import { BiNoEntry } from 'react-icons/bi';

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
    title: '€19m/yr',
    description: 'Unemployment cost of highly skilled immigrants',
    icon: <GiPayMoney style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: '€50m/yr',
    description: 'Cost of international students brain drain',
    icon: <GiCoins style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: '20%',
    description: 'Multicultural youth at risk of marginalization',
    icon: <BiNoEntry style={{ fontSize: 40, color: '#FFFFFF' }} />,
  },
  {
    title: '53,000',
    description: 'Tech experts needed to fill the gap by 2025',
    icon: <GiWantedReward style={{ fontSize: 40, color: '#FFFFFF' }} />,
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
    title: 'Digitalization Training Program',
    description:
      'An in-depth training program covering many skills and tools from Google digital marketing tools to growth hacking and aimed at building the next generation of digital marketing professionals.',
    photo: integration,
  },
  {
    title: 'Entrepreneurship Training',
    description:
      'The goal of these training programs is to give participants the fundamental tools to create a viable company (Tmi/Oy/etc). The training is divided into workshops that allow them to develop their business ideas, put into practice the teachings, and navigate the ecosystem.',
    photo: entrepreneurshipMindset,
  },
  {
    title: 'Future/Technical skills training & Certifications',
    description:
      'We always work with a partner to create and deliver programs and workshops that cover highly in-demand skills to cultivate talent, improve employability, and support entrepreneurship know-how.',
    photo: techTraining,
  },
  {
    title: 'Career Clinics',
    description:
      'The Career Clinic training is customizable training for participants who are more interested in employment opportunities. A multi-session training over several weeks with topics ranging from job searching to LinkedIn and time management, CVs, cover letters, and networking.',
    photo: skills,
  },
];
