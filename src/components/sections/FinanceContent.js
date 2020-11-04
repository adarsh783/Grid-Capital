import React from 'react';
import { Link } from 'react-router-dom';
import Assetgrowth from '../Cards/Assetgrowth';
import Dostart from '../Cards/Dostart';
import Financialfreedom from '../Cards/Financialfreedom';
import FinancialResearch from '../Cards/FinancialResearch';
import NotoRegular from '../Cards/NotoRegular';
import portfolioallocation from '../Cards/Portfolioallocation';
import {Grid} from '@material-ui/core';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Portfolioallocation from '../Cards/Portfolioallocation';

export default function BlogContent() {
    return (
         <Grid container spacing={5}>       
           <Grid item xs={12} sm={4} >
            <Assetgrowth />
           </Grid>
           <Grid item xs={12} sm={4} >
            <NotoRegular />
           </Grid>
           <Grid item xs={12} sm={4} >
            <Portfolioallocation />
           </Grid>
           </Grid>
    );
  }