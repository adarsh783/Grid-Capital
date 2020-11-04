import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardMedia,CardContent,Typography } from '@material-ui/core';
import bimage from '../blogimages/Difference.png';
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

export default function FinancialResearch() {
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
          Not doing research is not an option
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          How investors get lured by news paper articles, recommendations on news channels, stock tips, etc. Why you should do your own research...
          </Typography>
        </CardContent>
    </Card>
    </Link>
  );
}