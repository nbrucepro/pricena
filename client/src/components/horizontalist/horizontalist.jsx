import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowX: 'scroll',
  },
  item: {
    flexShrink: 0,
    height: 32,
    width: 32,
    backgroundColor: theme.palette.grey[200],
    '&:nth-child(2)': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:nth-child(3)': {
      backgroundColor: theme.palette.grey[400],
    },
    '&:nth-child(4)': {
      backgroundColor: theme.palette.grey[500],
    },
    '&:nth-child(5)': {
      backgroundColor: theme.palette.grey[600],
    },
    '&:nth-child(6)': {
      backgroundColor: theme.palette.grey[700],
    },
    '&:nth-child(7)': {
      backgroundColor: theme.palette.grey[800],
    },
  },
}));

const HorizontalList = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
      <div className={classes.item}></div>
    </Paper>
  );
};

export default HorizontalList;
