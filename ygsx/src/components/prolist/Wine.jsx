import React from 'react';

import Title from './title'
import Prolist from './content'
import connect from './connect'


const Wine = (props) => {
    return (
        <div>
            <Title title='名优美酒'/>
            <Prolist data={ props.wineList }/>
        </div>
    );
}

export default  connect(Wine);