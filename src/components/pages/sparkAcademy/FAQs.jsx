import React, { useState } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';

const FAQs = ({ sparkAcademyFaqLoaded, sparkAcademy_FAQ }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  if (!sparkAcademyFaqLoaded) {
    return <div className={classes.loading}>Spark Academy FAQs data is loading ...</div>;
  }
  return (
    <div>
      <Typography variant='h4' className={classes.sectionTitle}>
        Spark Academy FAQ
      </Typography>
      {sparkAcademy_FAQ &&
        sparkAcademy_FAQ.map((faq, index) => (
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
  );
};

export default FAQs;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '70%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
      marginBottom: theme.spacing(5),
    },
    margin: '5em auto',
    border: '1px solid #f9f9f9',
  },
  sectionTitle: {
    margin: '1em',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
  },
}));
