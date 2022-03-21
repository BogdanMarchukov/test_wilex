import  React from 'react';
import classes from './PageLayout.module.css'


export const PageLayout = ({children}) => {
    return (
        <div className={classes.pageLayout} >
            {children}
        </div>
    );
};