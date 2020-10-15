import React from 'react';
import { LoginDiv } from './style'

import {
  Tabs,
  Badge,
  List,
  InputItem,
  Button,
  Checkbox,
  Flex
} from 'antd-mobile';

import Login1 from '@/assets/images/login1.png'


const tabs = [
  { title: <Badge>手机快捷登录</Badge> },
  { title: <Badge>账号密码登录</Badge> },
];
const data = [
  // { value: 0, label: 'Ph.D.' },
  { value: 0 },
];
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const index = () => {
  const onChange = (val) => {
    console.log(val);
  }

  return (
    <LoginDiv>
      {/* 这是登录界面 */}

      <Tabs tabs={tabs}
        initialPage={1}
        onChange={(tab, index) => { console.log('onChange', index, tab); }}
        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        {/* 手机快捷登录 */}
        <div style={{ height: '500px', backgroundColor: '#fff' }}>

          <List>
            <InputItem
              // {...getFieldProps('autofocus')}
              // clear
              placeholder="请输入手机号"
            // ref={el => this.autoFocusInst = el}
            ></InputItem>
            <InputItem
              clear
              placeholder="请输入验证码"
              extra="获取验证码"
            ></InputItem>
            未注册过的手机将自动注册ygsx账号
            <Button style={{ background: '#98e6c6', color: 'white' }}>登录</Button>

          </List>
            <img src={Login1} alt="" />




        </div>

        {/* 账号密码登录 */}
        <div style={{ height: '200px', backgroundColor: '#fff' }}>
          <List>
            <InputItem
              placeholder="手机/账号/邮箱"
            ></InputItem>
            <InputItem
              clear
              placeholder="请输入密码"
            ></InputItem>
            忘记密码
            <Button style={{ background: '#98e6c6', color: 'white' }}>登录</Button>

          </List>

        </div>


      </Tabs>
      <List>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => onChange(i.value)}>
            {/* {i.label} */}
            我已阅读并同意《yg服务协议》和《隐私条款》
          </CheckboxItem>
        ))}
      </List>

    </LoginDiv>
  );
}

export default index;

