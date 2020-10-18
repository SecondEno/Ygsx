import React, { Component } from 'react';

import { Route, withRouter, Switch, Redirect } from 'react-router-dom'

import Cate from './Cate'
//样式组件
import {
    CateContainer
} from './style'

@withRouter

class index extends Component {
    render() {
        let prePath = this.props.match.path
        let push = this.props.history.push  
        console.log(push)

        console.log(prePath)
        return (
            <CateContainer>
                {/* 子组件 子组件匹配的前提  父组件先匹配成功 */}
                <Switch>
                    <Route path={`${prePath}cate`} component={()=>(<Cate push={this.props.history.push}/>)}  />
                    {/* 重定向完成 */}
                    {/* <Redirect from="/" to="/cate" /> */}
                    <Cate/>
                </Switch>
            </CateContainer>
        );
    }
}

export default index;
