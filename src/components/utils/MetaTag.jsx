import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const MetaTag = ({ title, description, screenshot }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta itemprop='name' content={title} />
      <meta itemprop='description' content={description} />
      <meta itemprop='image' content={screenshot} />
    </Helmet>
  );
};

MetaTag.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default MetaTag;
