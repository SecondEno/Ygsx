import React, { Component, Suspense, lazy } from 'react'
import GlobalStyle from './style'

import { Route, Switch, Redirect } from 'react-router-dom'


// import Login from '@/views/Login'
// const Login = lazy( () => import('./views/Login/index111111111') )
const Login = lazy( () => import('./views/Login/index') )



class App extends Component {
  render() {
    return (
      <>

        <GlobalStyle />

        {/* App */}
        {/* <Login /> */}
        <Suspense  fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </Suspense>
      
      </>
    );
  }
}

export default App;
