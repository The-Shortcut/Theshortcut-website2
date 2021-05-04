import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';

const Index = () => {
    const classes = useStyles();
  return <footer className={classes.footer}> here is footer.</footer>;
};

export default Index;

const useStyles = makeStyles((theme) => ({
    footer: {
        minWidth: '100%',
        height: '400px',
        background: theme.palette.secondary.main
    }
}))
