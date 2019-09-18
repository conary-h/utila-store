import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

interface iProps {
    store: any
};

const Root = ({ store } : iProps) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

export default Root;