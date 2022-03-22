// @flow 
import * as React from 'react';
import classes from './SearchLiset.module.css'

interface datalist {
    url: string
    title: string
}

type Props = {
    dataList: datalist[] | null
};

export const SearchList = (props: Props) => {
    return (
        <div className={classes.wrapper}>
            {
                props.dataList ?
                props.dataList.map((data, index) => {
                    return (
                        <div className={classes.itemWrapper}>
                            <div>https://{data.url}</div>
                            <div className={classes.title}>{data.title}</div>
                            <div className={classes.text} >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus earum maxime molestiae odit placeat ratione reprehenderit sequi tenetur voluptatem! Architecto at consequuntur debitis ea laborum porro reiciendis, sint? At, doloremque dolorum eaque eum facere, facilis fugit magnam maiores minima qui ratione recusandae similique sit temporibus unde! Doloremque, dolores neque?
                            </div>
                        </div>
                    )
                })
                    : null
            }
        </div>
    );
};