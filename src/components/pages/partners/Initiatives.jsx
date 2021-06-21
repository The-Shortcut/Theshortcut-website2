import React from 'react';

// DATA
import { initiativesData } from './partnersData';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

// Children
import Title from '../../custom/Title';

const Initiatives = ({initRef}) => {
  const classes = useStyles();

  return (
    <div ref={initRef} className={classes.root}>
      <Title>Initiative Examples</Title>
      <div className={classes.container}>
        {initiativesData.map((data, index) => (
          <Card className={classes.card}>
            <CardActionArea disabled>
              <CardMedia className={classes.media} image={data.photo} title={data.title} />
              <div style={{ backgroundColor: '#00A99D', height: '5px' }} />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant='h4' className={classes.title}>
                  {data.title.toLocaleUpperCase()}
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
    minWidth: '80%',
    maxWidth: '80%',
    margin: '6em auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: '90%',
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '95%',
      maxWidth: '95%',
    },
    /*  border: '1px solid red', */
  },
  container: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gridTemplateRows: 'none',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '100%',
    maxWidth: '100%',
    /*     border: '2px solid red', */
    margin: 'auto',
  },
  card: {
    margin: '1em auto',
    borderRadius: '10px',
  },
  title: {
    minHeight: '3.5em',
    maxHeight: '3.5em',
    textAlign: 'center',
  },
  text: {
/*     minHeight: '11em',
    maxHeight: '11em', */
    margin: '1em',
    lineHeight: '28px',
    textAlign: 'center',
  },
  media: {
    minHeight: '12em',
    maxHeight: '12em',
    [theme.breakpoints.down('sm')]: {
      minHeight: '16em',
    maxHeight: '16em',
    }
  },
}));
