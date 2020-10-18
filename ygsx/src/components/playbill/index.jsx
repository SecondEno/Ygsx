import React from 'react';

import PlayBillContainer from './style'
import playbillIMG from '@/assets/images/playbill.jpg'
const index = () => {
    return (
        <PlayBillContainer>
            <img src={playbillIMG} alt=""/>
        </PlayBillContainer>
    );
}

export default index;
