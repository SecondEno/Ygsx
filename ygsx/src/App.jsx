// import React, { Component } from 'react'
import React, { Component, Suspense, lazy } from 'react'


//默认样式
import GlobalStyle from './style'
import { Route } from 'react-router-dom'
import Detail from './views/detail'
import Index from './views/Ygsx'
import List from './views/List'

//底部菜单导航
import Layout from './components/Layout'
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        
        <Suspense fallback='等待中'>
        {/* <Route  path="/ygsx" component={ Index } /> */}
          <Route exact path="/" component={Layout} />
          <Route path="/detail" component={Detail} />
          <Route path="/list" component={List} />
          
        </Suspense>
      </>
    )
  }
}

export default App