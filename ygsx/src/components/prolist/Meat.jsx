import React from 'react';

import Title from './title'
import Prolist from './content'
import connect from './connect'


const Meat = (props) => {
    return (
        <div>
            <Title title='精选肉类'/>
            <Prolist data={ props.meatList }/>
        </div>
    );
}

export default  connect(Meat);