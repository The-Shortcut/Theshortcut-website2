import React, { useState, useEffect } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getFAQ } from '../../../actions/faqActions';

// Children
import Title from '../../custom/Title';
const FAQ = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const { faq_about } = useSelector((state) => state.faq);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFAQ());
  }, [dispatch]);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Title>FAQ</Title>
      {faq_about &&
        faq_about.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
              expandIcon={
                expanded === `panel${index}` ? (
                  <IndeterminateCheckBoxIcon fontSize='large' color='inherit' />
                ) : (
                  <AddBoxIcon fontSize='large' color='primary' />
                )
              }
              aria-controls='panel-content'
              id='panel1bh-header'>
              <Typography variant='body1'>{faq.title.rendered}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant='subtitle2'
                component='p'
                dangerouslySetInnerHTML={{ __html: faq.content.rendered }}
              />
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export default FAQ;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '70%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
    margin: 'auto',
  },
}));