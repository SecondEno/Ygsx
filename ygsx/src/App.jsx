import React, { Component } from 'react';
import GlobalStyle from './style'

import { Route } from 'react-router-dom'

import Login from '@/views/Login'


class App extends Component {
  render() {
    return (
      <>

        <GlobalStyle />

        {/* App */}
        <Login />
      
      </>
    );
  }
}

export default App;
