
import * as React from 'react';
import {PageLayout} from "../../Layout/PageLayout";
import {UserCard} from "../../Component/UserCard/UserCard";

type Props = {

};

export const User = (props: Props) => {
    return (
        <PageLayout>
            <UserCard/>
        </PageLayout>
    );
};