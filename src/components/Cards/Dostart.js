import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardMedia,CardContent,Typography } from '@material-ui/core';
import bimage from '../blogimages/Do Start.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
    height:500
  },
  media: {
    height: 260,
  }
});

export default function DoStart() {
  const classes = useStyles();
 
  return (
    <Link to={'/secondary'} style={{ textDecoration: 'none' }}>
    <Card className={classes.root}>
       <CardMedia
       className={classes.media}
       image={bimage}
        title="Paella dish"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
          Starting the investment journey
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          How to start building your investments - mostly around equity. Various investment options available...
          </Typography>
        </CardContent>
    </Card>
    </Link>
  );
}