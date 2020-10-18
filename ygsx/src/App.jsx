// import React, { Component } from 'react'
import React, { Component, Suspense, lazy } from 'react'


//默认样式
import GlobalStyle from './style'
import { Route } from 'react-router-dom'
import Detail from './views/detail'
import Index from './views/Ygsx'

//底部菜单导航
import Layout from './components/Layout'
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Layout />
        <Suspense fallback='等待中'>
        {/* <Route  path="/ygsx" component={ Index } /> */}
          <Route path="/detail" component={Detail} />
          
        </Suspense>
      </>
    )
  }
}

export default App