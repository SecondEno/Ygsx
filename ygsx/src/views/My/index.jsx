import React from 'react';
import { MyDiv } from './style'

// 引入宫格
import {
  Grid,
  Card,
  Icon

} from 'antd-mobile';

const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));
const data1 = Array.from(new Array(5)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));


const index = () => {
  return (
    <MyDiv>
      {/* 个人中心 */}

      <Card full className="cardbackground">
        <Card.Header extra={<Icon type="ellipsis" />} />
        <Card.Body>
          <div className="cardbody-header">
            <span className="imgBorder">
              {/* <img src="" alt="用户头像"/> */}
            </span>
            <div>登录/注册</div>
          </div>
        </Card.Body>
        <Card.Footer content="空...." />
      </Card>

      <div className="sub-title"></div>
      <Grid data={data1} activeStyle={false} columnNum={5} className="jiange" />

      <div className="sub-title"></div>
      <Grid data={data} activeStyle={false} />


    </MyDiv>
  );
}

export default index;

