/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

// Meta Tag
import MetaTag from '../../utils/MetaTag';

const VisitUs = () => {
  return (
    <div>
      <MetaTag
        title='Visit Us | The Shortcut'
        description='Book a Visit to learn and more contact with The shortcut people'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/homepage-2.png'
      />
      <iframe
        style={{ minWidth: '100vw', minHeight: '100vh', border: 'none', marginTop: '15px' }}
        title='book a visit panel'
        src='https://rentle.shop/theshortcut?lang=en'
        allowpaymentrequest='true'
        referrerpolicy='no-referrer'></iframe>
    </div>
  );
};

export default VisitUs;
