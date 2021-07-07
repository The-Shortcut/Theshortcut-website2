import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const TrainingCard = ({program}) => {
    const classes = useStyles();
    return (
        <Card key={program.index} className={classes.card}>
            <CardMedia
              component='img'
              alt={program.title}
              className={classes.media}
              image={program.image}
              title={program.title}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant='h4' className={classes.title}>
                {program.title.toLocaleUpperCase()}
              </Typography>
              <Typography variant='subtitle1' component='p' className={classes.text}>
                {program.description}
              </Typography>
            </CardContent>
          </Card>
    )
}

export default TrainingCard;

const useStyles = makeStyles((theme) => ({
    card: {
        
    },
    cardContent: {},
    title: {},
    text:{}
}))
