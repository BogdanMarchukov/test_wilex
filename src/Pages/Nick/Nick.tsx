// @flow
import * as React from 'react';
import {UserCard} from "../../Component/UserCard/UserCard";
import {PageLayout} from "../../Layout/PageLayout";

type Props = {

};
export const Nick = (props: Props) => {
    return (
        <PageLayout>
            <UserCard/>
        </PageLayout>
    );
};