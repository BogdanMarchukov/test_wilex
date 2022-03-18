// @flow 
import * as React from 'react'
import classes from './input.module.css'
import {Button} from '@material-ui/core'
import {useEffect, useState} from "react";

type Props = {
    
};
export const Input = (props: Props) => {

    const [value, setValue] = useState('')




    return (
        <div className={classes.inputWrapper}>
            <input className={classes.input} onChange={(event)=> setValue(event.target.value) }/>
            <Button variant="contained" color="primary">
                search
            </Button>
        </div>
    );
};