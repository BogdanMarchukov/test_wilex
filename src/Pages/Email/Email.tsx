// @flow
import * as React from 'react';
import {PageLayout} from "../../Layout/PageLayout";
import {Box, Card} from "@material-ui/core";
import {UserCard} from "../../Component/UserCard/UserCard";

type Props = {
    
};

export const Email = (props: Props) => {
    return (
        <PageLayout>
            <UserCard/>
        </PageLayout>
    );
};