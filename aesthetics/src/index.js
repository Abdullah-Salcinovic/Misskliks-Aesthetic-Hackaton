import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Calculator from './views/CalculatePrice'
import Home from './views/home'
import Kalkulator from './views/kalkulator'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Kalkulator} exact path="/kalkulator" />
        <Route component={Calculator} exact path="/CalculatePrice" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
