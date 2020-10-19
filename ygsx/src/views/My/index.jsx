import React from 'react';
import { MyDiv } from './style'

// 引入宫格
import {
  Grid,
  Card,
  Icon
} from 'antd-mobile';

import Toux from '../../assets/images/toux.jpg'



const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));
const data1 = Array.from(new Array(5)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));


const index = () => {
  function goDetailaPage(){
    console.log(this,props)
    this.props.history.push(`/login`)
  }
  return (
    <MyDiv>
      {/* 个人中心 */}

      {/* 绿色区域 */}
      <Card full className="cardbackground">
        <Card.Header extra={<Icon type="ellipsis" />} />
        <Card.Body>
          <div className="cardbody-header">
            <span className="imgBorder">
              {/* 静态头像图片占位 */}
              <img src={Toux} alt="用户头像" className="touxiang" />
            </span>
            <div className="name" >登录/注册</div>
          </div>
        </Card.Body>
      </Card>

      <Grid data={data1} activeStyle={false} columnNum={5} className="jiange" />

      <Grid data={data} activeStyle={false} />


    </MyDiv>
  );
}

export default index;

