// @flow
import * as React from 'react';
import {Box, Card} from "@material-ui/core";
import classes from './uaerCard.module.css'
import {useSelector} from "react-redux";

type Props = {};
export const UserCard = (props: Props) => {

    const selector = (state: any)=> {
        return {
            email: state.userReducer.email,
            nick: state.userReducer.nick,
            phone: state.userReducer.phone,
            ip: state.userReducer.ip
        }
    }

    const {email, ip, nick, phone} = useSelector(selector)



    return (
        <Box
            sx={{
                width: '350px'
            }}
        >
            <Card>
                <div className={classes.block}>
                    <span>User Email</span>
                    <span>-{email}</span>
                </div>
                <div className={classes.block}>
                    <span>User Nick</span>
                    <span>-{nick}</span>
                </div>
                <div className={classes.block}>
                    <span>User Phone</span>
                    <span>-{phone}</span>
                </div>
                <div className={classes.block}>
                    <span>User IP</span>
                    <span>-{ip}</span>
                </div>
            </Card>
        </Box>
    );
};