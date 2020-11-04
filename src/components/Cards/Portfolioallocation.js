import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardMedia,CardContent,Typography } from '@material-ui/core';
import bimage from '../blogimages/perls.png';
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

export default function Portfolioallocation() {
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
          Perils of Penny stocks
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          What are penny stocks, the risks associated with them and why they should be completely avoided...
          </Typography>
        </CardContent>
    </Card>
    </Link>
  );
}