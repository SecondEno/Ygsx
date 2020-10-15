import React, { Component, Suspense, lazy } from 'react'

import GlobalStyle from './style'

// 功能，底部菜单和内容显示
import Layout from './components/Layout'


// Suspense, lazy import() 路由优化时，使用 路由打包代码分割和路由懒加载
// import Search from './views/Search'
// 返回不是一个所谓的类，而一个Promise对象
// 完成一个代码分块 和懒加载
const Search = lazy(() => import('./views/Search'))
const Detail = lazy(() => import('./views/Detail'))

import A from './views/Cate/A'

import { Route } from 'react-router-dom'

class App extends Component {


  render() {
    return (
      <>
        <GlobalStyle />
        <Layout />
        {/* 
        Suspense 当路由进行分块和懒加时，此时它就是异步
        异步就是有加载等待，有一个友好性提示 Suspense组件帮助我们做异步等待提示
        fallback 等待时显示的内容，可以是自定义组件
      */}
        <Suspense fallback='等待中'>
          <Route path="/search" component={Search} />
          <Route path="/detail/:id" component={Detail} />
        </Suspense>
      </>
    )
  }
}

export default App