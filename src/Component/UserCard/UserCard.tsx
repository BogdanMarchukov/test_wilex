// @flow
import * as React from 'react';
import {Box, Card} from "@material-ui/core";
import classes from './uaerCard.module.css'
import {useSelector} from "react-redux";
import {ToHome} from "../ToHome/ToHome";

type Props = {};
export const UserCard = (props: Props) => {

    const selector = (state: any)=> {
        return {
            email: state.userReducer.email,
            nick: state.userReducer.nick,
            phone: state.userReducer.phone,
            ip: state.userReducer.ip,
            name: state.userReducer.name,
            surname: state.userReducer.surname
        }
    }

    const {email, ip, nick, phone, name, surname} = useSelector(selector)



    return (
        <div
            className={classes.wrapper}
        >
            <ToHome left={50} top={100}/>
            <Card>
                <h3>User Data:</h3>
                <div className={classes.block}>
                    <span>User Email :</span>
                    <span>{email}</span>
                </div>
                <div className={classes.block}>
                    <span>User Nick :</span>
                    <span>{nick}</span>
                </div>
                <div className={classes.block}>
                    <span>User Phone :</span>
                    <span>{phone}</span>
                </div>
                <div className={classes.block}>
                    <span>User IP :</span>
                    <span>{ip}</span>
                </div>
                <div className={classes.block}>
                    <span>User Name :</span>
                    <span>{name}</span>
                </div>
                <div className={classes.block}>
                    <span>User Surname :</span>
                    <span>{surname}</span>
                </div>
            </Card>
        </div>
    );
};