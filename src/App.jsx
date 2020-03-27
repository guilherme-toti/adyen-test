import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { AppContextProvider } from './contexts/AppContext'

import ScrollToTop from './components/ScrollToTop'
import Result from './views/Result'
import Home from './views/Home'

const App = () => (
  <AppContextProvider>
    <Router basename="/">
      <ScrollToTop />
      <Switch>
        <Route path="/result/:city" component={Result} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </AppContextProvider>
)

export default App;
