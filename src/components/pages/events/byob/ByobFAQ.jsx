import React, { useState, useEffect } from 'react';

// REDUX
import { getByobFAQ } from '../../../../actions/docActions';
import { useSelector, useDispatch } from 'react-redux';

// Children
import Title from '../../../custom/Title';
// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';

const ByobFAQ = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { byobFaqLoaded, beforeFAQ, inProcessFAQ, aboutFAQ } = useSelector((state) => state.docs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByobFAQ());
  }, [dispatch]);

  if (!byobFaqLoaded) {
    return <div> Data is loading ...</div>;
  }
  return (
    <div className={classes.root}>
      <Title>FAQ</Title>
      <div>
        <Typography variant='h4' className={classes.sectionTitle}>
          Before Appling
        </Typography>
        {beforeFAQ &&
          beforeFAQ.map((faq, index) => (
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
                  variant='subtitle1'
                  component='p'
                  dangerouslySetInnerHTML={{ __html: faq?.content.rendered }}
                />
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
      <div>
        <Typography variant='h4' className={classes.sectionTitle}>
          The Application Process
        </Typography>
        {inProcessFAQ &&
          inProcessFAQ.map((faq, index) => (
            <Accordion
              key={index + 10}
              expanded={expanded === `panel${index + 10}`}
              onChange={handleChange(`panel${index + 10}`)}>
              <AccordionSummary
                expandIcon={
                  expanded === `panel${index + 10}` ? (
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
                  variant='subtitle1'
                  component='p'
                  dangerouslySetInnerHTML={{ __html: faq?.content.rendered }}
                />
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
      <div>
        <Typography variant='h4' className={classes.sectionTitle}>
          About The Program
        </Typography>
        {aboutFAQ &&
          aboutFAQ.map((faq, index) => (
            <Accordion
              key={index + 20}
              expanded={expanded === `panel${index + 20}`}
              onChange={handleChange(`panel${index + 20}`)}>
              <AccordionSummary
                expandIcon={
                  expanded === `panel${index + 20}` ? (
                    <IndeterminateCheckBoxIcon fontSize='large' color='inherit' />
                  ) : (
                    <AddBoxIcon fontSize='large' color='primary' />
                  )
                }
                aria-controls='panel-content'
                id='panel1bh-header'>
                <Typography variant='body1'>{faq.acf.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='subtitle1' component='p'>
                  {faq.acf.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </div>
  );
};

export default ByobFAQ;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '70%',
    margin: '6em auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
      margin: '2em auto',
    },
  },
  sectionTitle: {
    margin: '1em',
  },
}));
