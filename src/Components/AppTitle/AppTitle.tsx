import React from 'react';

type AppTitlePropsType = {
    title: string
}

export const AppTitle = (props:AppTitlePropsType) => {
    return (
        <h1>{props.title}</h1>
    );
};

