import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardMedia,CardContent,Typography } from '@material-ui/core';
import bimage from '../blogimages/CoverImage.png';

const useStyles = makeStyles({
  root: {
    minWidth: 375,
  },
  media: {
    height: 260,
  }
});

export default function SimpleCard() {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
       <CardMedia
       className={classes.media}
       image={bimage}
        title="Paella dish"
      />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Say No to Regular plans
          </Typography>
        </CardContent>
    </Card>
  );
}
