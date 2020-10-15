import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 路由
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(

  <Router>
    {/* exact */}
    <App />
  </Router>,
  document.getElementById('root')
);

