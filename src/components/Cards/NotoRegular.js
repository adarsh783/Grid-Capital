import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardMedia,CardContent,Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import bimage from '../blogimages/CoverImage.png';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
    height:460
  },
  media: {
    height: 260,
  }
});

export default function NoToRegular() {
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
          Mutual Funds: Regular Vs Direct plans
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Difference between Regular & Direct plans. Why you should opt for a direct plan and avoid regular plans...
          </Typography>
        </CardContent>
    </Card>
    </Link>
  );
}