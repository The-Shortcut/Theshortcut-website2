// For coachingData
import { RiMovieFill, RiQuestionAnswerFill } from 'react-icons/ri';
import { GiClover } from 'react-icons/gi';
import { FaHandsHelping } from 'react-icons/fa';

// For trainingData
import digiTrainingImg from '../../../assets/photos/digiTrainingImg.jpg';
import entrepreneureshiptImg from '../../../assets/photos/entrepreneureshiptImg.jpg';
import techTrainingImg from '../../../assets/photos/techTrainingImg.jpg';
import careerClinicImg from '../../../assets/photos/careerClinicImg.JPG';
import elyLogo from '../../../assets/logo/partners/ely-logo.png';

export const coachingData = [
  {
    title: 'CAREER CLINIC RECORDINGS',
    description:
      'This is a 9 video series that you can access at any time that goes over issues such as CVs, cover letters, job searching, networking, interviews, time management, LinkedIn profile, and effective communication.',
    link: ' https://www.youtube.com/playlist?list=PLwPjXphlI7pRYSB3z2yFU38vOEQL_bSrw',
    icon: <RiMovieFill style={{ fontSize: 60, color: '#00A99D' }} />,
    active: true,
  },
  {
    title: 'LOTTERY SESSIONS',
    description:
      'These sessions are a monthly giveaway to our community. You are entered into this lottery by participating in the Ask Me Anything sessions or being active in our online community. This session is online with our Career Coach to discuss specific topics such as your individual CV or interview skills.',
    link: '/events/all',
    icon: <GiClover style={{ fontSize: 60, color: '#00A99D' }} />,
    active: true,
  },
  {
    title: 'ASK ME ANYTHING SESSIONS',
    description:
      'These are open sessions that take place on FB live and Instagram Live where our experts will answer questions that have been sent beforehand or during the live chat.',
    link: '/events/all',
    icon: <RiQuestionAnswerFill style={{ fontSize: 60, color: '#00A99D' }} />,
    active: true,
  },
  {
    title: 'Työ-SIB Coaching Program',
    description:
      'We are a trusted partner for Työ-SIB (Social Impact Bond) for career coaching. Coaching includes both individual and group training. Työ-SIB decides who is admitted to this program, so contact your TE office or email info@tyosib.fi directly for more information to see if you are eligible.',
    link: '',
    icon: <FaHandsHelping style={{ fontSize: 60, color: '#00A99D' }} />,
    active: false,
  },
];

export const prevTrainingData = [
  {
    title: 'Digitalization Training Program',
    description:
      'An in-depth training program covering many skills and tools from Google digital marketing tools to growth hacking and aimed at building the next generation of digital marketing professionals.',
    image: digiTrainingImg,
    partnerLogo: elyLogo,
  },
  {
    title: 'Entrepreneurship Training',
    description:
      'The goal of these training programs is to give participants the fundamental tools to create a viable company (Tmi/Oy/etc). The training is divided into workshops that allow them to develop their business ideas, put into practice the teachings, and navigate the ecosystem.',
    image: entrepreneureshiptImg,
    partnerLogo: elyLogo,
  },
  {
    title: 'Future/Tech skills Certifications',
    description:
      'We always work with a partner to create and deliver programs and workshops that cover highly in-demand skills to cultivate talent, improve employability, and support entrepreneurship know-how.',
    image: techTrainingImg,
    partnerLogo: elyLogo,
  },
  {
    title: 'Career Clinics',
    description:
      'The Career Clinic training is customizable training for participants who are more interested in employment opportunities. A multi-session training over several weeks with topics ranging from job searching to LinkedIn and time management, CVs, cover letters, and networking.',
    image: careerClinicImg,
    partnerLogo: elyLogo,
  },
];
