// @flow 
import * as React from 'react';
import classes from './Loader.module.css'
import {useSelector} from "react-redux";

type Props = {
    
};
export const Loader = (props: Props) => {

    const selector = (state: any) => {
        return {
            loader: state.searchReducer.loader,
            searchType: state.searchReducer.searchType
        }
    }

    const {loader, searchType} = useSelector(selector)

    const text = () => {
        if (searchType === '/') {
            return null
        } else return searchType
    }



    return (
        <div className={classes.wrapper}>
            {
                loader ?
                    <div className={classes.ldsEllipsis}>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
                    : text()
            }

        </div>
    );
};