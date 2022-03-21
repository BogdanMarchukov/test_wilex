// @flow
import * as React from 'react';
import {Link} from "react-router-dom";
import {Box, Button} from "@material-ui/core";

type Props = {
    left: number
    top: number
};

export const ToHome = (props: Props) => {
    return (
        <Box sx={{
            position: 'absolute',
            left: `${props.left}%`,
            top: `${props.top}px`
        }} >
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <Button variant="outlined">to home</Button>
            </Link>
        </Box>
    );
};