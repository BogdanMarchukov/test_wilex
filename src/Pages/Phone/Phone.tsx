// @flow
import * as React from 'react';
import {UserCard} from "../../Component/UserCard/UserCard";
import {PageLayout} from "../../Layout/PageLayout";

type Props = {

};
export const Phone = (props: Props) => {
    return (
        <PageLayout>
            <UserCard/>
        </PageLayout>
    );
};