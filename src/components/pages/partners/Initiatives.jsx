import React from 'react';

// DATA
import { initiativesData } from './partnersData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

// Children
import Title from '../../custom/Title';
const Initiatives = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title>Initiative Examples</Title>
      <div className={classes.container}>
        {initiativesData.map((data, index) => (
          <Card className={classes.card}>
            <CardActionArea disabled>
              <CardMedia className={classes.media} image={data.photo} title={data.title} />
              <div style={{ backgroundColor: '#00A99D', height: '5px' }} />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant='h4' className={classes.title}>
                  {data.title}
                </Typography>
                <Typography variant='subtitle1' component='p' className={classes.text}>
                  {data.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '90%',
    margin: '7em auto',
    /*  border: '1px solid red', */
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '90%',
    maxWidth: '90%',
/*     border: '2px solid red', */
    margin:'auto'
  },
  card: {
    margin: '1em auto',
    borderRadius: '10px',
    maxWidth: 280,
    minHeight: 540,
    maxHeight: 540,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      minHeight: 580,
      maxHeight: 580,
      minWidth: 320,
      maxWidth: 320,
    },
  },
  title: {
    minHeight:'2em',
    maxHeight:'2em',
    textAlign: 'center',
  },
  text: {
    minHeight: '11em',
    maxHeight: '11em',
    margin: '1em',
    lineHeight: '28px',
    textAlign: 'left',
  },
  media: {
    height: 140,
  },
}));
