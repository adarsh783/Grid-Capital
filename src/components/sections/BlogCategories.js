import React, { Component, useEffect } from "react";
import Blogcard from './Blogcard';
import Finance from './Finance';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    blogheading: {
      "@media (min-width: 0px)": {
        marginTop: theme.spacing(13),
        textAlign: 'center',
      }},
      blogheadingss: {
        "@media (min-width: 0px)": {
          marginTop: theme.spacing(25),
          textAlign: 'center',
        }}
     }));

export default function Assets() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes. blogheadingss }>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="All" style={{marginLeft:'400px'}}/>
                    <Tab label="Finance" />
                    <Tab label="Profit" />
                    <Tab label="Income growth" />
                </Tabs>
           
            { value == 0 &&
                <Blogcard />
            }
            { value == 1 &&
                   <Finance />
            }
            { value == 2 &&
                   <Blogcard />
            }
            { value == 3 &&
                   <Finance />
            }

        </div>
    );
}
