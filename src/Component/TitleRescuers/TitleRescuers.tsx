// @flow
import * as React from 'react';
import classes from './TitleRescuers.module.css'

type Props = {

};
export const TitleRescuers = (props: Props) => {
    return (
        <div className={classes.title}>
            <h1>
                <span className={classes.blue}>W</span>
                <span className={classes.red}>I</span>
                <span className={classes.yellow}>L</span>
                <span className={classes.blue}>I</span>
                <span className={classes.red}>X</span>
            </h1>
        </div>
    );
};