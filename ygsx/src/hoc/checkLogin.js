import React, { Component } from 'react'
import { connect } from 'react-redux'

export default Cmp => {
  const p = state => ({
    token: state.user.token || sessionStorage.getItem('token') || ''
  })
  @connect(p, null)
  class CheckLogin extends Component {
    constructor(props) {
      super(props);
      this.login()
    }

    // 数据更新时也进行验证
    UNSAFE_componentWillUpdate() {
      this.login()
    }

    login = () => {
      if ('' === this.props.token) {
        this.props.history.push('/login')
        return;
      }
    }


    render() {
      return (
        <>
          <Cmp {...this.props} />
        </>
      )
    }
  }
  return CheckLogin
}
