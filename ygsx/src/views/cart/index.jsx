import React, { Component } from 'react';

import CartCard from '../../components/CartCard'
import CartFot from '../../components/CartFot'
// 引入单个的组件

class index extends Component {
    render() {
        return (
            <div>
                <CartCard />
                <CartFot />
            </div>
        );
    }
}

export default index;