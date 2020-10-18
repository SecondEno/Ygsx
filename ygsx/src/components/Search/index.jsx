import React, { Component } from 'react';


import SearchContainer from './style'

class index extends Component {
    render() {
        return (
            <SearchContainer>
                <a>北京</a>
                <div>
                    <a></a>
                    <span>请输入商品名称</span>
                </div>
            </SearchContainer>
        );
    }
}

export default index;