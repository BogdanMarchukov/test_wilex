// @flow
import * as React from 'react';
import {Box, Card} from "@material-ui/core";

type Props = {};
export const UserCard = (props: Props) => {

    return (
        <Box
            sx={{
                width: '350px'
            }}
        >
            <Card>
                <p>User Email</p>
                <p>User Nick</p>
                <p>User Phone</p>
                <p>User IP</p>
            </Card>
        </Box>
    );
};