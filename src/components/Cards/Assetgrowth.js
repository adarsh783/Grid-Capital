import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardMedia,CardContent,Typography } from '@material-ui/core';
import bimage from '../blogimages/NoSavings.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
    height:460
  },
  media: {
    height: 260,
  }
});

export default function Assetgrowth() {
  const classes = useStyles();
 
  return (
    <Link to={'/Blogdetail'} style={{ textDecoration: 'none' }}>
    <Card className={classes.root}>
       <CardMedia
       className={classes.media}
       image={bimage}
        title="Paella dish"
      />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          No savings are small
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Often people say that they barely have any monthly savings (specially people in the initial years of their career) and hence they don’t s...
          </Typography>
        </CardContent>
    </Card>
    </Link>
  );
}