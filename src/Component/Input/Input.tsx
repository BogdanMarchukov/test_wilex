// @flow
import * as React from 'react'
import {useState} from 'react'
import classes from './input.module.css'
import {Button} from '@material-ui/core'
import {useDispatch} from "react-redux";
import {saveTextToStore} from "../../redux/action/actionCreator";

type Props = {
    
};
export const Input = (props: Props) => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch()



    return (
        <div className={classes.inputWrapper}>
            <input className={classes.input} onChange={(event)=> saveTextToStore(dispatch, event.target.value) }/>
            <Button variant="contained" color="primary">
                search
            </Button>
        </div>
    );
};