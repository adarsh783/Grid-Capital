import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardMedia,CardContent,Typography } from '@material-ui/core';
import bimage from '../blogimages/Availing.png';
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

export default function FinancialFreedom() {
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
          Why Loan moratorium should be completely avoided
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Understanding the loan moratorium and the additional interest cost associated with it...
          </Typography>
        </CardContent>
    </Card>
    </Link>
  );
}