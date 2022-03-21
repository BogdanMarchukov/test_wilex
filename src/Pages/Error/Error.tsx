// @flow 
import * as React from 'react';
import {PageLayout} from "../../Layout/PageLayout";
import classes from './Error.module.css'
import {ToHome} from "../../Component/ToHome/ToHome";

type Props = {
    
};
export const Error = (props: Props) => {
    return (
        <PageLayout>
            <div className={classes.wrapper} >
                <ToHome left={47} top={200}/>
                <h1>404</h1>
            </div>
        </PageLayout>
    );
};