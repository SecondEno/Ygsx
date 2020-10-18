import React, { Component } from 'react';
import Title from './title'
import Prolist from './content'

import indexModel from '../../models/indexModel'
// 引入连接的高阶组件
import connect from './connect'

@connect
class index extends Component {
    render() {
        return (
            <div>
                <Title title='优选大闸蟹券'/>
                <Prolist data={ this.props.firstList }/>
            </div>
        );
    }
}

export default index