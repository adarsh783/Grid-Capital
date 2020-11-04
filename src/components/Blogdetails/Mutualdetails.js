import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Grid,Typography } from '@material-ui/core';
import NoToRegular from '../Cards/NotoRegular';
import Assetgrowth from '../Cards/Assetgrowth';
import PortfolioAllocation from '../Cards/Portfolioallocation';
import FinancialFreedom from '../Cards/Financialfreedom';
import FinancialResearch from '../Cards/FinancialResearch';
import DoStart from '../Cards/Dostart';
import { makeStyles } from "@material-ui/core/styles";
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import RegularVsDirectPlan from '../blogimages/RegularVsDirectPlan.png';
import RegularPlan from '../blogimages/RegularPlan.png';
import DirectPlan from '../blogimages/DirectPlan.png';

const useStyles = makeStyles(theme => ({
    blogheading: {
      "@media (min-width: 0px)": {
        marginTop: theme.spacing(23),
        textAlign: 'center',
      }
    },
    blogfirst: {
        "@media (min-width: 0px)": {
          marginTop: theme.spacing(5),
          textAlign: 'justify',
        }
      },
      blognew: {
        "@media (min-width: 0px)": {
          marginTop: theme.spacing(5),
          textAlign: 'center',
          fontFamily: 'Courier New',
          color:'#000000'
        }
      },
      blognews: {
        "@media (min-width: 0px)": {
          marginTop: theme.spacing(5),
          textAlign: 'center'
        }
      },
      blogquote: {
        "@media (min-width: 0px)": {
          marginTop: theme.spacing(1),
          textAlign: 'center',
          fontFamily: 'Courier New',
          color:'#000000'
        }
      }
  }));

export default function Blog(){
    const classes = useStyles();
     return(
         <div>
             <Grid container direction="column">
                 <Grid item container>
                     <Grid item xs={2} sm={2} />
                     <Grid item xs={12} sm={8}>
                            <div className={classes. blogheading } data-reveal-delay="150">
                              <h1 className='reveal-rotate-from-left'>Mutual Funds: Regular Vs Direct plans<TrendingFlatIcon /></h1>
                            </div>   
                             <Typography className={classes.blogfirst}>
                            <span className='reveal-from-top' data-reveal-delay="150"> When we talk about mutual funds, I see a lot of people still confused between regular and direct plans. This is in spite of the pleothora of articles which have already been written around this topic. Many sites/ advisors still recommend people to go ahead with regular plans by mostly using scare tactics. Some of the common points I have come across are:</span>
                             </Typography> 
                             <Typography className={classes.blognew}>
                             “Invest in regular plans if you are new to market”
                             </Typography>
                             <Typography className={classes.blogquote}>
                             “Direct plans are only for the financial savvy”
                             </Typography>
                             <Typography className={classes.blogquote}>
                             “You get expert guidance in regular plans”
                             </Typography>
                             <Typography className={classes.blogquote}>
                             “Regular plans are much more convenient to buy”
                             </Typography>
                             <Typography className={classes.blogquote}>
                             “Regular plans provide you value added services – managing and tracking funds on your behalf, periodic reviews, etc.”
                             </Typography>
                             <Typography className={classes.blogquote}>
                             “Retail investors need guidance”
                             </Typography>
                             <Typography className={classes.blogquote}>
                             “Your financial advisor can help you generate higher returns…etc….etc…..”
                             </Typography>
                             <Typography className={classes.blogfirst}>
                             The reasons are never ending. Frankly, none of the of above is true and people are just trying to mislead the gullible innocent investors and play on their fear. Personal Finance/ Mutual funds are simply not that complex, as people are made to believe. 

The direct and regular plans have <span style={{color:'#000000',fontWeight:'bold'}}>absolutely no difference</span> other than the fact that in regular plans you end up paying brokerage <span style={{color:'#000000',fontWeight:'bold'}}>not one time but everyday</span> as long as you are invested in the fund.
                             </Typography>
                             <img src={RegularVsDirectPlan} className={classes.blogfirst} />
                             <Typography style={{textAlign:'center'}}>Regular Vs Direct plans</Typography>
                             <Typography className={classes.blogfirst}>
                             Whether you make money from the mutual fund or not, you will continue to pay commission to your broker/ bank. <span style={{color:'#000000',fontWeight:'bold'}}>Whenever you are buying funds from your bank’s demat account, you are automatically investing in a regular plan. The bank here acts as the broker and enjoys the commission.</span> When you enter a distributor/ investment advisor code while buying the fund, you are again investing in a regular plan. 
                             </Typography>
                             <Typography className={classes.blogfirst}>
                             The best way to work with a financial advisor is to pay him a one time fee for his advisory. Your funds are being managed by the mutual fund house (for which you are already paying a fee). The Govt has mandated that all mutual fund schemes have a direct plan as well (from 2013), hence there is absolutely no reason to pay a regular commission to your financial advisor. Even SEBI guidelines mandate that the financial advisor should only be charging a one time fee. 
                             </Typography>
                             <Typography className={classes.blogfirst}>
                             Also, when investing in direct plans through a financial advisor, your interests are aligned as well. The advisor will suggest only the best schemes as per his knowledge so as to not lose you as a client for future dealings. In case of regular plans, the advisor can always be biased towards suggesting a plan which provides him with a higher commission (in many cases it is more than 1% per annum). 
                             </Typography>
                             <Typography className={classes.blogfirst}>
                             Let us take a look at the difference which a regular plan Vs a direct plan can make in your returns:
                             </Typography>
                             <img src={RegularPlan} className={classes.blogfirst}/>
                             <Typography className={classes.blognews}>Low returns from a regular plan</Typography>
                             <Typography className={classes.blogfirst}>Investment of INR 1 Lakh for a period of 15 years under a regular plan with commission outgo as 1.25%. Assume post management fee return of 12%. The calculations have been simplified and approximate just to give an idea. Actual calculation will vary slightly. </Typography>
                             <Typography className={classes.blogfirst}>Same investment under a direct plan would have generated substantially higher return:</Typography>
                             <img src={DirectPlan} className={classes.blogfirst}/>
                             <Typography className={classes.blognews}>Comparative returns from Direct plans</Typography>
                             <Typography className={classes.blogfirst}>
                             Net absolute return under regular plans is 253% whereas under direct plan it is 347%! The commissions you saved also keep compounding thereby generating a massive difference. Often <span style={{color:'#000000',fontWeight:'bold'}}>many articles fail to recognize the benefit of compounding</span> on commissions saved. 
                             </Typography>
                             <Typography className={classes.blogfirst}>
                             As stated previously, in regular plans the broker would continue to get commissions irrespective of whether you are making a profit or incurring a loss.

I simply see no reason why anyone should invest in a regular plan. It is much more prudent to pay a (one-time) advisory fee to your broker/ advisor than paying regular commissions to him year on year. 
                             </Typography>
                             <Typography className={classes.blogfirst}>
                             Also, investing in mutual funds does not need you to be a financial expert. Some basic knowledge and understanding of equity markets and common sense is all that is needed to make good decisions. This basic knowledge you should anyways have whether you are investing through directly or through an advisor. Surely, you can leave everything into the hands of your broker/ advisor and trust him blindly. 


                             </Typography>
                             <Typography className={classes.blogfirst}>
                             The performance of various mutual funds does not vary significantly from each other and very few advisors actually make the effort to understand the asset quality of mutual funds which could actually help generate better returns. Start following the mutual fund’s manager, his/her interviews, articles, etc and you will soon come to know his investment style which will enable better investment decisions. 
                             </Typography>
                     </Grid>
                     <Grid item xs={2} sm={2} />
                 </Grid>
             </Grid>
         </div>
     )
}