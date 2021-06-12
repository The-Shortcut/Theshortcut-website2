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
                <Typography gutterBottom variant='h6' component='h6' className={classes.title}>
                  {data.title}
                </Typography>
                <Typography variant='body1' color='textSecondary' component='p'>
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
    margin: '10em auto',
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
    maxWidth: 280,
    minHeight: 490,
    maxHeight: 490,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
      minHeight: 510,
      maxHeight: 510,
    },
  },
  title: {
    textAlign: 'center',
    height: theme.spacing(7),
  },
  media: {
    height: 140,
  },
}));
