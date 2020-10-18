import React from 'react';
import Title from './style'

const index = (props) => {
    return (
        <Title>
            <span></span>
            <h3>{ props.title || '精品好货'}</h3>
            <span></span>
        </Title>
    );
}

export default index;