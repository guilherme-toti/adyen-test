import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import ScrollToTop from './components/ScrollToTop'
import Result from './views/Result'
import Home from './views/Home'

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Switch>
        <Route path="/result/:city" component={Result} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
