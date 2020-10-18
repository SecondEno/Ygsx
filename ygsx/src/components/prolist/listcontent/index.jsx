import React, { Component } from 'react';
import {withRouter } from 'react-router-dom'
import ProContainer from './style'



@withRouter
class index extends Component {
    async goDetailaPage(code){
        // 第一步发送请求获得数据
        // 发送action
        // 第二步跳转页面
        this.props.history.push(`/detail?commodityCode=${code}`)
    }
    render() {
        let data = this.props.data || []
        return (
            <ProContainer >
                <ul>
                {
                    data.map(
                        (item,index)=> (
                            <li key={item.get('CommodityCode') } onClick = { this.goDetailaPage.bind(this, (item.get('CommodityCode')) ) }>
                                <div className='proitem'>
                                    <div className='pic'>
                                        <img src={ item.get('SmallPic') }/>
                                    </div>
                                    <div className='info'>
                                        <p className='name'>{item.get('CommodityName')}</p>
                                        <div className='price'>
                                            <strong>¥{item.get('OriginalPrice')}</strong>
                                            /{item.get('Spec')}
                                            <i></i>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    )
                }
                </ul>
            </ProContainer >
        );
    }
}

export default index;
