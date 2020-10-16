import React, { useState, useEffect } from 'react';
import { LoginDiv } from './style'

import { connect } from 'react-redux'
import {
  login
} from '../../store/actions/userAction'


const inputHandler = initialState => {
  const [value, setValue] = useState(initialState)
  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

const index = props => {

  let username = inputHandler('')
  let password = inputHandler('')

  const post = () => {
    // console.log( username , password)
    let userinfo = {
      username: username.value,
      password: password.value
    }
    // console.log( userinfo)
    // 发起dispatch给saga
    props.login()

  }

  useEffect( () => {
    console.log(props);
  })

  return (
    <LoginDiv>
      <div>
        <label>
          账号：
          <input type="text" {...username} />
        </label>
      </div>
      <div>
        <label>
          密码：
          <input type="text" {...password} />
        </label>
      </div>
      <div>
        <button onClick={post}>进入系统</button>
      </div>
    </LoginDiv>
  );
}

export default connect(null , {login})(index);
