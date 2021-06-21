import React from 'react';
import Slider from 'react-slick';
import Title from './Title';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

// LOGOS
import Aalto_University_logo from '../../assets/logo/partners/Aalto_University_logo.png';
import aalto_logo from '../../assets/logo/partners/aalto-logo.png';
import avance_logo from '../../assets/logo/partners/avance-logo.png';
import avp_letters_logo from '../../assets/logo/partners/avp_letters-logo.png';
import Business_College_logo from '../../assets/logo/partners/Business College-logo.png';
import dash_logo from '../../assets/logo/partners/dash-logo.png';
import futurice_logo from '../../assets/logo/partners/futurice-logo.png';
import google_logo from '../../assets/logo/partners/google-logo.png';
import helsinki_logo from '../../assets/logo/partners/helsinki-logo.png';
import holvi_logo from '../../assets/logo/partners/holvi-logo.png';
import icebreaker_logo from '../../assets/logo/partners/icebreaker-logo.png';
import junction_logo from '../../assets/logo/partners/junction-logo.png';
import kiuas_logo from '../../assets/logo/partners/kiuas-logo.png';
import maria01_logo from '../../assets/logo/partners/maria01-logo.png';
import microsoft_logo from '../../assets/logo/partners/microsoft-logo.png';
import mozilla_logo from '../../assets/logo/partners/Mozilla-logo.png';
import newco_logo from '../../assets/logo/partners/newco-logo.png';
import pwc_logo from '../../assets/logo/partners/pwc-logo.png';
import singa_logo from '../../assets/logo/partners/singa-logo.png';
import slush_logo from '../../assets/logo/partners/slush_Logo.png';
import startupLifers_logo from '../../assets/logo/partners/startuplifers-logo.png';
import supercell_logo from '../../assets/logo/partners/Supercell-logo.png';
import teknologia_logo from '../../assets/logo/partners/teknologia-logo.jpg';
import uusima_logo from '../../assets/logo/partners/uusima-logo.png';
import vertical_logo from '../../assets/logo/partners/vertical-logo.png';
import wave_logo from '../../assets/logo/partners/wave-logo.png';
import yksityisyrittajain_logo from '../../assets/logo/partners/yksityisyrittajain-logo.jpg';
import yousician_logo from '../../assets/logo/partners/yousician-logo.png';
import yrittajat_logo from '../../assets/logo/partners/yrittajat-logo.png';

const partnerslist1 = [
  {
    name: 'Aalto_University logo',
    logo: Aalto_University_logo,
  },
  {
    name: 'aalto logo',
    logo: aalto_logo,
  },
  {
    name: 'avance logo',
    logo: avance_logo,
  },

  {
    name: 'Business College logo',
    logo: Business_College_logo,
  },

  {
    name: 'futurice logo',
    logo: futurice_logo,
  },
  {
    name: 'google_logo',
    logo: google_logo,
  },
  {
    name: 'helsinki logo',
    logo: helsinki_logo,
  },
  {
    name: 'holvi logo',
    logo: holvi_logo,
  },
  {
    name: 'avp_letters logo',
    logo: avp_letters_logo,
  },
  {
    name: 'junction logo',
    logo: junction_logo,
  },
  {
    name: 'dash logo',
    logo: dash_logo,
  },
  {
    name: 'kiuas logo',
    logo: kiuas_logo,
  },
  {
    name: 'maria01 logo',
    logo: maria01_logo,
  },
  {
    name: 'microsoft logo',
    logo: microsoft_logo,
  },
  {
    name: 'mozilla logo',
    logo: mozilla_logo,
  },
  {
    name: 'icebreaker logo',
    logo: icebreaker_logo,
  },

  {
    name: 'pwc logo',
    logo: pwc_logo,
  },

  {
    name: 'slush logo',
    logo: slush_logo,
  },
  {
    name: 'startupLifers logo',
    logo: startupLifers_logo,
  },
  {
    name: 'supercell logo',
    logo: supercell_logo,
  },
  {
    name: 'teknologia logo',
    logo: teknologia_logo,
  },
  {
    name: 'uusima logo',
    logo: uusima_logo,
  },
  {
    name: 'vertical logo',
    logo: vertical_logo,
  },
  {
    name: 'wave logo',
    logo: wave_logo,
  },

  {
    name: 'yksityisyrittajain logo',
    logo: yksityisyrittajain_logo,
  },
  {
    name: 'yousician logo',
    logo: yousician_logo,
  },
  {
    name: 'newco logo',
    logo: newco_logo,
  },
  {
    name: 'yrittajat logo',
    logo: yrittajat_logo,
  },
  {
    name: 'singa logo',
    logo: singa_logo,
  },
];

const OurPartnersLogos = () => {
  const classes = useStyles();
  const settings = {
    rows: 3,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
      <Title>We Have Worked With...</Title>
      </div>
      <Slider {...settings}>
        {partnerslist1.map((item, index) => (
          <div>
            <div key={index} className={classes.logoContainer}>
              <img src={item.logo} alt={item.name} width='60%' />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurPartnersLogos;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    maxWidth:'100%',
    margin: '6em auto',
  },
  title: {
    marginBottom: theme.spacing(12)
  },
  logoContainer: {
    border: 'none',
    padding:'1em'
  },
  logo: {
    minWidth: '20%',
    maxWidth: '20%',
  },
}));
