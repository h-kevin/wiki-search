import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import HomePage from './containers/HomePage/HomePage'
import SearchPage from './containers/SearchPage/SearchPage'
import ResultsPage from './containers/ResultsPage/ResultsPage'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Layout>
      <Switch>
        <Route
          path="/articles/:title"
          component={ResultsPage}
        />
        <Route
          path="/search"
          component={SearchPage}
        />
        <Route
          path="/"
          component={HomePage}
          exact
        />
        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}

export default App
