// import React, { Component } from 'react'
import React, { Component, Suspense, lazy } from 'react'


//默认样式
import GlobalStyle from './style'
import { Route } from 'react-router-dom'
// import Detail from './views/detail'
import Index from './views/Ygsx'
// import List from './views/List'
import login from './views/Login'
const Detail= React.lazy(() => import('./views/detail'));
const List = React.lazy(() => import('./views/List'));

//底部菜单导航
import Layout from './components/Layout'
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />

        <Suspense fallback='login'>
          {/* <Route  path="/ygsx" component={ Index } /> */}
          <Route exact path="/" component={Layout} />
          <Route path="/detail" component={Detail} />
          <Route path="/list" component={List} />
          <Route path="/login" component={login} />
        </Suspense>
      </>
    )
  }
}

export default App