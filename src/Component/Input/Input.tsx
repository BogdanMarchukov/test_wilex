// @flow
import * as React from 'react'
import classes from './input.module.css'
import {Button} from '@material-ui/core'
import {useDispatch, useSelector} from "react-redux";
import {addUserData, saveTextToStore} from "../../redux/action/actionCreator";
import {Link} from "react-router-dom";
import {Loader} from "../Loader/Loader";

type Props = {};
export const Input = (props: Props) => {


    const dispatch = useDispatch()

    const selector = (state: any) => {
        return {
            searchType: state.searchReducer.searchType,
            inputValue: state.searchReducer.inputValue
        }
    }

    const {searchType, inputValue} = useSelector(selector)

    const inputPlaceholder = () => {
        if (inputValue === '/') {
            return ''
        } else return inputValue
    }


    return (
        <>
            <div className={classes.inputWrapper}>
                <input value={inputPlaceholder()} className={classes.input} onChange={(event) => saveTextToStore(dispatch, event.target.value)}/>
                <Link to={searchType}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addUserData(dispatch, inputValue, searchType)}
                    >

                        search

                    </Button>
                </Link>
            </div>
            <Loader/>
        </>
    );
};