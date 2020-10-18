import React, { Component } from 'react';
import Title from './title'
import Prolist from './content'


// 引入连接的高阶组件
import connect from './connect'

@connect
class Snack extends Component {
    render() {
        return (
            <div>
                <Title title='休闲食品'/>
                <Prolist data={ this.props.snackList }/>
            </div>
        );
    }
}

export default Snack 