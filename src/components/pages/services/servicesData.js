// For coachingData
import clinicImage from '../../../assets/photos/clinicImage.jpg';
import personalSessionImage from '../../../assets/photos/personalSession.jpg';
import askMeLiveImage from '../../../assets/photos/askMeLive.jpg';
import staticImage from '../../../assets/illustrations/9.png';

// For trainingData
import digiTrainingImg from '../../../assets/photos/partner1.jpg';
import entrepreneureshiptImg from '../../../assets/photos/partnersHero2.jpeg';
import techTrainingImg from '../../../assets/photos/integration.jpg';
import careerClinicImg from '../../../assets/photos/skills-workshop.jpg';
import elyLogo from '../../../assets/logo/partners/ely-logo.png';



export const coachingData = [
  {
    title: 'CAREER CLINIC RECORDINGS',
    description:
      'This is a 9 video series that you can access at any time that goes over issues such as CVs, cover letters, job searching, networking, interviews, time management, LinkedIn profile, and effective communication.',
    link: ' https://www.youtube.com/playlist?list=PLwPjXphlI7pRYSB3z2yFU38vOEQL_bSrw',
    image: clinicImage,
    active: true,
  },
  {
    title: 'OPEN PERSONAL SESSIONS',
    description:
      'These sessions are available to the community via reservation or drop-in for a  short personal session (depending on if they are online or in-person) with our Career Coach.',
    link: '',
    image: personalSessionImage,
    active: true,
  },
  {
    title: 'ASK ME ANYTHING SESSIONS',
    description:
      'These are open sessions that take place on FB live and Instagram Live where our experts will answer questions that have been sent beforehand or during the live chat.',
    link: '',
    image: askMeLiveImage,
    active: true,
  },
  {
    title: 'LIMITED COACHING',
    description:
      'We are a trusted partner for different organizations that ask us to conduct coaching and training for them. These funders determine whom we can coach. This coaching service is, unfortunately, not open to everyone. ',
    link: '',
    image: staticImage,
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
