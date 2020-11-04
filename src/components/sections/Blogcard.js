import React from 'react';
import { Link } from 'react-router-dom';
import Assetgrowth from '../Cards/Assetgrowth';
import {Grid} from '@material-ui/core';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { makeStyles } from "@material-ui/core/styles";
import BlogContent from './Blogmain';
import Header from './BlogCategories';

const useStyles = makeStyles(theme => ({
  blogheading: {
    "@media (min-width: 0px)": {
      marginTop: theme.spacing(13),
      textAlign: 'center',
    }},
    blogheadingss: {
      "@media (min-width: 0px)": {
        marginTop: theme.spacing(15)
      }}
   }));

function BlogList() {
  const classes = useStyles();
  return (
    <Grid container direction='column'>
       <Grid item container>       
         <Grid item xs={false} sm={2} />
         <Grid item xs={12} sm={8} className={classes. blogheadingss }>
          <BlogContent />
         </Grid>
         <Grid item xs={false} sm={2} />
    </Grid>
    </Grid>
  );
}

export default BlogList;