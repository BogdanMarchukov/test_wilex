import React from 'react';
import classes from './MainLayout.module.css'

const MainLayout = ({children}) => {
    return (
        <div className={classes.layout} >
            {children}
        </div>
    );
};

export default MainLayout;