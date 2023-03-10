import React from 'react';
import { Typography, Link, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    color: '#333',
    padding: theme.spacing(4),
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  link: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    margin: `0 ${theme.spacing(2)}px`,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item>
          <Link color="inherit" href="#" className={classes.link}>
            Home
          </Link>
        </Grid>
        <Grid item>
          <Link color="inherit" href="#" className={classes.link}>
            About
          </Link>
        </Grid>
        <Grid item>
          <Link color="inherit" href="#" className={classes.link}>
            Contact
          </Link>
        </Grid>
        <Grid item>
          <Link color="inherit" href="#" className={classes.link}>
            Privacy Policy
          </Link>
        </Grid>
        <Grid item>
          <Link color="inherit" href="#" className={classes.link}>
            Terms of Use
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
