import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const ToTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);
  const classes = useStyles();

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <FaArrowCircleUp
      title='Scroll to top'
      className={classes.main}
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
    />
  );
};

export default ToTopArrow;

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'fixed',
    width: '190vw',
    bottom: '3vh',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    animation: 'fadeIn 0.3s',
    transition: 'opacity 0.4s',
    opacity: 0.7,
    color: '#00A99D',
    zIndex: 100
  },
}));
