import React from 'react';

import Title from './title'
import Prolist from './content'
import connect from './connect'


const Cookie = (props) => {
    return (
        <div>
            <Title title='烘焙糕点'/>
            <Prolist data={ props.cookieList }/>
        </div>
    );
}

export default  connect(Cookie);