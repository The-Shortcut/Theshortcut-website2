import React from 'react';

// Hero Image
import heroImage from '../../../assets/photos/partnersHero2.jpeg';

// Material-IU
import { makeStyles } from '@material-ui/core/styles';

// Children
import PartnersStatistics from './PartnersStatistics';
import ActivePartners from './ActivePartners';
import Initiatives from './Initiatives';
import OurPatrnersLogos from '../../custom/OurPartnersLogos';
import GetPartnerForm from './GetPartnerForm';

const Partners = () => {
  const classes = useStyles();
  return (
    <div>
      {window.innerWidth < 960 ? (
        <img
          src={heroImage}
          width='100%'
          height='auto'
          alt='about-page'
          style={{ filter: 'brightness(40%)' }}
        />
      ) : (
        <div className={classes.hero} />
      )}
      <PartnersStatistics />
      <ActivePartners />
      <Initiatives />
      <div style={{ backgroundColor: '#DDDDDD', border: '1px solid #DDDDDD' }}>
        <OurPatrnersLogos />
      </div>
      <GetPartnerForm />
    </div>
  );
};

export default Partners;

const useStyles = makeStyles((theme) => ({
  root: {},
  hero: {
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '75vh',
    maxHeight: '75vh',
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage}) center/cover fixed no-repeat`,
  },
}));
