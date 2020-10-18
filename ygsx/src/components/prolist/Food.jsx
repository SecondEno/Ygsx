import React, { Component } from 'react';
import Title from './title'
import Prolist from './content'


// 引入连接的高阶组件
import connect from './connect'

@connect
class Food extends Component {
    render() {
        return (
            <div>
                <Title title='粮油调味'/>
                <Prolist data={ this.props.foodList }/>
            </div>
        );
    }
}

export default Food